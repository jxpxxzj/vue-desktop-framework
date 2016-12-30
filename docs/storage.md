# Storage
The storage system uses `electron-json-storage` to persist and read user settings for application.

`electron-json-storage` implements an API somehow similar to [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) to write and read JSON objects to/from the operating system application data directory, as defined by `app.getPath('userData')`.

## Documention
* [storage](#module_storage)
    * [.get(key, callback)](#module_storage.get)
    * [.getMany(keys, callback)](#module_storage.getMany)
    * [.getAll(callback)](#module_storage.getAll)
    * [.set(key, json, callback)](#module_storage.set)
    * [.has(key, callback)](#module_storage.has)
    * [.keys(callback)](#module_storage.keys)
    * [.remove(key, callback)](#module_storage.remove)
    * [.clear(callback)](#module_storage.clear)

<a name="module_storage.get"></a>

### storage.get(key, callback)
If the key doesn't exist in the user data, an empty object is returned.
Also notice that the `.json` extension is added automatically, but it's
ignored if you pass it yourself.

Passing an extension other than `.json` will result in a file created
with both extensions. For example, the key `foo.data` will result in a file
called `foo.data.json`.

**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Read user data  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | key |
| callback | <code>function</code> | callback (error, data) |

**Example**  
```js
this.$storage.get('foobar', (error, data) => {
  if (error) throw error;

  console.log(data);
});
```
<a name="module_storage.getMany"></a>

### storage.getMany(keys, callback)
This function returns an object with the data of all the passed keys.
If one of the keys doesn't exist, an empty object is returned for it.

**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Read many user data keys  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>Array.&lt;String&gt;</code> | keys |
| callback | <code>function</code> | callback (error, data) |

**Example**  
```js
this.$storage.getMany([ 'foobar', 'barbaz' ], (error, data) => {
  if (error) throw error;

  console.log(data.foobar);
  console.log(data.barbaz);
});
```
<a name="module_storage.getAll"></a>

### storage.getAll(callback)
This function returns an empty object if there is no data to be read.

**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Read all user data  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback (error, data) |

**Example**  
```js
this.$storage.getAll((error, data) => {
  if (error) throw error;

  console.log(data);
});
```
<a name="module_storage.set"></a>

### storage.set(key, json, callback)
**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Write user data  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | key |
| json | <code>Object</code> | json object |
| callback | <code>function</code> | callback (error) |

**Example**  
```js
this.$storage.set('foobar', { foo: 'bar' }, (error) => {
  if (error) throw error;
});
```
<a name="module_storage.has"></a>

### storage.has(key, callback)
**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Check if a key exists  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | key |
| callback | <code>function</code> | callback (error, hasKey) |

**Example**  
```js
this.$storage.has('foobar', (error, hasKey) => {
  if (error) throw error;

  if (hasKey) {
    console.log('There is data stored as `foobar`');
  }
});
```
<a name="module_storage.keys"></a>

### storage.keys(callback)
**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Get the list of saved keys  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback (error, keys) |

**Example**  
```js
const storage = require('electron-json-storage');

storage.keys(function(error, keys) {
  if (error) throw error;

  for (var key of keys) {
    console.log('There is a key called: ' + key);
  }
});
```
<a name="module_storage.remove"></a>

### storage.remove(key, callback)
Notice this function does nothing, nor throws any error
if the key doesn't exist.

**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Remove a key  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | key |
| callback | <code>function</code> | callback (error) |

**Example**  
```js
this.$storage.remove('foobar', (error) => {
  if (error) throw error;
});
```
<a name="module_storage.clear"></a>

### storage.clear(callback)
**Kind**: static method of <code>[storage](#module_storage)</code>  
**Summary**: Clear all stored data  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback (error) |

**Example**  
```js
this.$storage.clear((error) => {
  if (error) throw error;
});
```