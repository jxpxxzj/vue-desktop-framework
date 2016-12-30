# desktop-environment-integration

## Notification
Electron conveniently allows developers to send notifications with the HTML5 Notification API, using the currently running operating system's native notification APIs to display it.

### Usage
```js
const myNotification = new window.Notification('Title', {
    body: 'Lorem Ipsum Dolor Sit Amet'
});

myNotification.onclick = () => {
    console.log('Notification clicked')
};
```
See also: [notification - Web APIs | MDA](https://developer.mozilla.org/docs/Web/API/notification)

## Progress Bar in Taskbar
On Windows a taskbar button can be used to display a progress bar. This enables a window to provide progress information to the user without the user having to switch to the window itself.

You can use vue-electron to change the value of progress bar in Render Process.
### Usage
```js
this.$electron.remote.getCurrentWindow().setProgressBar(0.5);
```
