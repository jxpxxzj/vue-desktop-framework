<template>
    <div class="page2">
        another page
        <router-link :to="{path: '/'}"><el-button>Here is a Button</el-button></router-link>
        <el-button-group>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
        </el-button-group>
        <el-button @click="openSaveDialog">OpenSaveDialog</el-button>
        <el-button @click="increase">+1s</el-button>
        <textarea v-model="content">
        </textarea>
        <el-button @click="beginDownload">BeginDownload</el-button>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="downprogress"></el-progress>
        <p>Speed: {{speed}} KiB/s Remaining:{{remaining}}s</p>
        <el-button @click="notification">notification</el-button>
        <el-button @click="config">config</el-button>
        <el-button @click="windows">windows</el-button>
        
        <el-upload
            action="http://localhost:8958/api/Test/Upload"
            :on-progress="upload_onprogress"
            :on-success="upload_onsuccess"
            :multiple=true
            :data="{ folder: this.folder }"
        >
        <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>

        <el-button @click="tryLogin">tryLogin</el-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            navTree: [],
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ],
            content: '',
            downprogress: 0.0,
            speed: 0.0,
            remaining: '',
            folder:'27bed5c2302c4eb4be387e32',
        };
    },
    methods: {
        increase () {
            this.$store.commit('increment');
            this.$notify.info({
                title: 'Notify',
                message: this.$store.state.count
            });
        },
        beginDownload () {
            this.$progress(this.$request('http://localhost:8958/api/Test/Download?objectId=587f9598232a2657304a742b'))
            .auth('Parry', '123456', true)
            .on( 'response', (res) => {
                const contentDisposition = res.headers['content-disposition'];
                const match = contentDisposition && contentDisposition.match(/(filename=|filename\*='')(.*)$/);
                const fnt = match && match[2] || 'default-filename.out';
                const filename = fnt.split(';')[0];
                const fws = this.$fs.createWriteStream( 'E:/' + filename );
                res.pipe( fws );
             })
            .on('progress', (state) => {
                if (state.percent !== undefined) {
                    this.downprogress = Math.round(state.percent * 100.0);
                    this.$electron.remote.getCurrentWindow().setProgressBar(state.percent);
                }
                this.speed = (state.speed / 1000).toFixed(2);
                if (state.time.remaining !== null) {
                    this.remaining = state.time.remaining.toFixed(2);
                }
            })
            .on('error', () => {

            })
            .on('end', () => {
                this.downprogress = 100;
                this.remaining = 0;
                this.$electron.remote.getCurrentWindow().setProgressBar(0);
                this.$notify.success({
                    title: 'Success',
                    message: 'Download successfully'
                });
                const n = new window.Notification('Success', { body: 'Download successfully' });
                n.onclick = () => {
                    window.alert('clicked');
                };

            })
        },
        openSaveDialog () {
            this.$electron.remote.dialog.showSaveDialog((fileName) => {
                if (fileName === undefined) {
                    console.log("You didn't save the file");
                    return;
                }
                this.$fs.writeFile(fileName, this.content, (err) => {
                    if (err) {
                        window.alert('An error ocurred creating the file ' + err.message);
                    };
                    window.alert('The file has been succesfully saved');
                });
            });
        },
        notification () {
            const n = new window.Notification('Hello!', { body: 'Notification world!' });
            n.onclick = () => {
                window.alert('clicked');
            };
        },
        config () {
            this.$storage.set('foobar', { foo: 'bar' });
            console.log(this.$storage);
            this.$storage.get('foobar', (error, data) => {
                if (error) throw error;
                console.log(data);
            });
        },
        windows () {
            console.log(this.$electron.remote);
            const win = this.$electron.remote.getCurrentWindow();
            win.setProgressBar(0.5);
        },
        upload_onprogress(event, file, fileList) {
            this.$electron.remote.getCurrentWindow().setProgressBar(event.percent / 100);        
        },
        upload_onsuccess (response, file, fileList) {
            console.log(response);
            this.$electron.remote.getCurrentWindow().setProgressBar(0);  
        },
        tryLogin () {
            
        }
    }
};
</script>