# vuex-router-sync
Effortlessly keep vue-router and vuex store in sync.

## Usage
 ``` js
store.state.route.path   // current path (string)
store.state.route.params // current params (object)
store.state.route.query  // current query (object)
```
When the router navigates to a new route, the store's state is updated.
