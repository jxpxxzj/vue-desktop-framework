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
            remaining: ''
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
            const vm = this;
            vm.$progress(vm.$request('http://dldir1.qq.com/qqfile/qq/QQ8.8/19876/QQ8.8.exe'))
            .on('progress', (state) => {
                if (state.percent !== undefined) {
                    vm.downprogress = Math.round(state.percent * 100.0);
                    this.$electron.remote.getCurrentWindow().setProgressBar(state.percent);
                }
                vm.speed = (state.speed / 1000).toFixed(2);
                if (state.time.remaining !== null) {
                    vm.remaining = state.time.remaining.toFixed(2);
                }
            })
            .on('error', () => {

            })
            .on('end', () => {
                vm.downprogress = 100;
                vm.remaining = 0;

                vm.$notify.success({
                    title: 'Success',
                    message: 'Download successfully'
                });
            })
            .pipe(vm.$fs.createWriteStream('E:\QQ8.8.exe'));
        },
        openSaveDialog () {
            const vm = this;
            vm.$electron.remote.dialog.showSaveDialog((fileName) => {
                if (fileName === undefined) {
                    console.log("You didn't save the file");
                    return;
                }
                vm.$fs.writeFile(fileName, vm.content, (err) => {
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
        }
    }
};
</script>