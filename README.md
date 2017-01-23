# vue-desktop-framework
A framework for making hybrid desktop app powered by electron and vue.  
一个基于 electron 和 vue 构建的, 用于编写 Hybrid 桌面应用的框架.

Mostly for my future project.

Forked from [pastahito/electron-vue-webpack](https://github.com/pastahito/electron-vue-webpack).

## Install
``` bash
# Clone the repository once
$ git clone https://github.com/jxpxxzj/vue-desktop-framework

# Go into the repository (rename it as you wish)
$ cd vue-desktop-framework

# Install the dependencies once
$ npm install
```

## Usage
Run this two commands in two different prompts to start developing with hot reloading.
``` bash
# Webpack builds once and watches to apply only the changes
$ npm run dev

# Start you electron app
$ npm start
```
## Package
This command use ```electron-packager```, and will generate ia32@win32 exe.
``` bash
$ npm run build
```
The executable file will be in ```./package```.

## What's included
- Vue 
- Vue-Router
- Vue-Resource
- Vuex
- Element-UI & normalize.css
- jQuery
- request & request-progress
- webpack
- ESLint & eslint-vue-plugin

## Template structure
```
├── vue-desktop-framework/              # Your project's name
    ├── app/
        ├── build/                      # Webpack will bundle your css/js/img here
        ├── src/
            ├── assets/                 # Images go here

            ├── components/             # Webcomponents go here

            ├── pages/                  # Pages go here

            ├── plugins/                # Vue plugins

            ├── entry.js                # App entry

            ├── routes.js               # Route table

            ├── store.js                # Vuex store

            ├── App.vue                 # Global js and css can go here

        ├── index.html                  # Single Page Application HTML, it only uses build's files

    ├── docs/                           # Framework documentations

    ├── main.js                         # Electron app init
    ├── package.json
    ├── webpack.config.js               # Minimal webpack setup

    ├── webpack.release.config.js       # Production webpack setup
```

# Todo
- [x] Production mode
- [x] Support electron-packager
- [ ] Better documentations.

## License
[MIT](http://opensource.org/licenses/MIT)
