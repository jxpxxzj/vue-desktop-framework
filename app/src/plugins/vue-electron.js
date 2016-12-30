// Vue-Electron interop plugin
export default {
    install (Vue) {
        // Render process
        // Electron module
        Vue.prototype.$electron = require('electron');

        // Node.js modules
        // Considering move into Main process?
        Vue.prototype.$fs = require('fs-extra');
        Vue.prototype.$path = require('path');
        Vue.prototype.$os = require('os');
        Vue.prototype.$util = require('util');
        Vue.prototype.$request = require('request');

        // Third-party library
        Vue.prototype.$progress = require('request-progress');
        Vue.prototype.$storage = require('electron-json-storage');

        // Disable zooming
        Vue.prototype.$electron.webFrame.setZoomLevelLimits(1, 1);
    }
};
