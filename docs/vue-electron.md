# Vue-Electron
The vue plugin that wraps some electron and node APIs to the Vue object.

Forked from [SimulatedGREG/vue-electron](https://github.com/SimulatedGREG/vue-electron).
## Usage
Instead of...

```js
const electron = require('electron');

export default {
    methods: {
        getName () {
            return electron.remote.app.getName();
        }
    }
}
```
Now can...

```js
export default {
    methods: {
        getName () {
            return this.$electron.remote.app.getName()
        }
    }
}
```

## Module List
- electron
- fs
- path
- os
- util
- request
- request-progress
- storage 