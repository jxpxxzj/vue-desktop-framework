# request
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

See also: [request/request](https://github.com/request/request)

See also: [Request —— 让 Node.js http请求变得超简单](https://segmentfault.com/a/1190000000385867)

# request-progress
Tracks the download progress of a `request` made with request, giving insight of various metrics including progress percentage, download speed and time remaining.

## Usage
```js
const vm = this;
// The options argument is optional so you can omit it
vm.$progress(vm.$request('https://az412801.vo.msecnd.net/vhd/VMBuild_20141027/VirtualBox/IE11/Windows/IE11.Win8.1.For.Windows.VirtualBox.zip'), {
    // throttle: 2000,                    // Throttle the progress event to 2000ms, defaults to 1000ms
    // delay: 1000,                       // Only start to emit after 1000ms delay, defaults to 0ms
    // lengthHeader: 'x-transfer-length'  // Length header to use, defaults to content-length
})
.on('progress', (state) => {
    // The state is an object that looks like this:
    // {
    //     percent: 0.5,               // Overall percent (between 0 to 1)
    //     speed: 554732,              // The download speed in bytes/sec
    //     size: {
    //         total: 90044871,        // The total payload size in bytes
    //         transferred: 27610959   // The transferred payload size in bytes
    //     },
    //     time: {
    //         elapsed: 36.235,        // The total elapsed seconds since the start (3 decimals)
    //         remaining: 81.403       // The remaining seconds to finish (3 decimals)
    //     }
    // }
    console.log('progress', state);
})
.on('error', (err) => {
    // Do something with err
})
.on('end', () => {
    // Do something after request finishes
})
.pipe(fs.createWriteStream('IE11.Win8.1.For.Windows.VirtualBox.zip'));
```
If the request's response does not include the `content-length` header, the values of some metrics will be `null`. Also `speed` and `time.remaining` will be `null` until it can be calculated.

The `state` object emitted in the `progress` event is reused to avoid creating a new object for each event.
If you wish to peek the `state` object at any time, it is available in `request.progressState`.