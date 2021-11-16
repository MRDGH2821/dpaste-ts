# dpaste-ts

Nodejs wrapper for [dpaste.com](https://dpaste.com/) using TypeScript.
Creates & Gets pastes anonymously.

## Usage

The functions are promise based.

### Import

```js
const { CreatePaste, GetRawPaste } = require("dpaste-js");
```

#### Create Paste

Returns URL of dpaste.

There are 4 arguments:

| Arguments   | Type   | Range/Limit                                             | Default values                       | Required? |
| ----------- | ------ | ------------------------------------------------------- | ------------------------------------ | --------- |
| content     | string | `250,000 bytes`                                         | NA                                   | `true`    |
| filename    | string | NA                                                      | date & time of paste creation in UTC | `false`   |
| syntax      | string | [Check here](https://dpaste.com/api/v2/syntax-choices/) | `'text'`                             | `false`   |
| expiry_days | number | `1` to `365`                                            | `7`                                  | `false`   |

```js
let source = "sample input";
let title = "sample day";
let syntax = "text";
let expire = 1;
let url;
CreatePaste(source, title, syntax, expire).then(link => {
  url = link;
  console.log(url);
}).catch(console.log); //will return dpaste link when successful, else error
```

#### Get Raw Paste

Returns Raw data of dpaste.

There is 1 argument:

| Arguments | Type   | Required? |
| --------- | ------ | --------- |
| url/id    | string | `true`    |

You can either provide complete URL of the dpaste or the ID of the paste.

```js
GetRawPaste(url).then(console.log); //Will return "sample input" as raw data
```

### Complete example

```js
const { CreatePaste, GetRawPaste } = require("dpaste-js");

let source = "sample input";
let title = "sample title";
let syntax = "text";
let expire = 1;
let url;
CreatePaste(source, title, syntax, expire).then(link => {
  url = link;
  console.log(url);
}).catch(console.log); //will return dpaste link when successful, else error

GetRawPaste(url).then(console.log); //Will return "sample input" as raw data
```

## Licence

[MIT](./licence) 
