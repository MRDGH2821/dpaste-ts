# dpaste-ts

[![codecov](https://codecov.io/gh/MRDGH2821/dpaste-ts/branch/master/graph/badge.svg?token=6LKVVGGYN2)](https://codecov.io/gh/MRDGH2821/dpaste-ts)

[![NPM](https://nodei.co/npm/dpaste-ts.png)](https://npmjs.org/package/dpaste-ts)

Nodejs wrapper for [dpaste.com](https://dpaste.com/) written using Typescript.
Creates & Gets pastes anonymously.

## Usage

The functions are promise based. Use them inside `async` functions or you may also use `.then().catch()`.

All functions have an internal delay of 1 second. This is to prevent abuse of [dpaste.com API](https://dpaste.com/api/v2/)

### Import

```js
const { CreatePaste, GetRawPaste } = require("dpaste-js");
```

### Create Paste

Returns URL of dpaste.

There are 4 arguments:

| Arguments   | Type   | Range/Limit                                             | Default values                       | Required? |
| ----------- | ------ | ------------------------------------------------------- | ------------------------------------ | --------- |
| content     | string | `250,000 bytes`                                         | NA                                   | `true`    |
| filename    | string | NA                                                      | date & time of paste creation in UTC | `false`   |
| syntax      | string | [Check here](https://dpaste.com/api/v2/syntax-choices/) | `'text'`                             | `false`   |
| expiry_days | number | `1` to `365`                                            | `7`                                  | `false`   |

When inside async function:

```js
let source = "sample input";
let title = "sample day";
let syntax = "text";
let expire = 1;

//Will return dpaste link when successful
let url = await CreatePaste(source, title, syntax, expire);
console.log(url);
```

Using `.then().catch()`

```js
//Will return dpaste link to console
CreatePaste(source, title, syntax, expire)
  .then(console.log)
  .catch(console.log);
```

### Get Raw Paste

Returns Raw data of dpaste.

There is 1 argument:

| Arguments | Type   | Required? |
| --------- | ------ | --------- |
| url/id    | string | `true`    |

You can either provide complete URL of the dpaste or the ID of the paste.

When inside async function:

```js
//Will return "sample input" as raw data
let rawData = await GetRawPaste(url);
console.log(rawData);
```

Using `.then().catch()`

```js
//Will return raw data to console
GetRawPaste(url)
  .then(console.log)
  .catch(console.log);
```

### Complete example

```js
const { CreatePaste, GetRawPaste } = require("dpaste-js");

let source = "sample input";
let title = "sample title";
let syntax = "text";
let expire = 1;

//Use the below code snippet inside async functions to get the data.

//Will return dpaste link when successful
let url = await CreatePaste(source, title, syntax, expire);
console.log(url);

//Will return "sample input" as raw data
let rawData = await GetRawPaste(url);
console.log(rawData);

//Use the below snippets if you wish to use .then().catch()

//Will return dpaste link to console
CreatePaste(source, title, syntax, expire)
  .then(console.log)
  .catch(console.log);

//Will return raw data to console
GetRawPaste(url)
  .then(console.log)
  .catch(console.log);
```

## Licence

[MIT](./licence)
