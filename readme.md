# dpaste-ts

[![codecov](https://codecov.io/gh/MRDGH2821/dpaste-ts/branch/master/graph/badge.svg?token=6LKVVGGYN2)](https://codecov.io/gh/MRDGH2821/dpaste-ts)

[![NPM](https://nodei.co/npm/dpaste-ts.png)](https://npmjs.org/package/dpaste-ts)

Nodejs wrapper for [dpaste.com](https://dpaste.com/) written using Typescript.
Creates & Gets pastes anonymously.

Now with Authentication support!

## Usage

The functions are promise based. Use them inside `async` functions or you may use `.then().catch()`.

All functions have an internal delay of 1 second. This is to prevent abuse of [dpaste.com API](https://dpaste.com/api/v2/)

### Disable delay

Set the environment variable as follows -

```sh
DPASTE_DISABLE_DELAY = true
```

**Note:** if the rate of requests exceeds 1 request per second, then you will be blocked from API to create new pastes. Same applies for reading pastes.

### Authentication

Read more [here](https://dpaste.com/api/v2/) under Authentication section.

Generate an API token key from your [dashboard](https://dpaste.com/dashboard).

Set it into your environment with the variable name as `DPASTE_API_TOKEN`

### Import

```js
const { createPaste, getRawPaste } = require('dpaste-ts'); // in CJS style

import { createPaste, getRawPaste } from 'dpaste-ts'; // in ESM style
```

### Create Paste

Returns URL of dpaste.

There are 5 arguments:

| Arguments   | Type   | Range/Limit                                             | Default values                                                      | Required? |
| ----------- | ------ | ------------------------------------------------------- | ------------------------------------------------------------------- | --------- |
| content     | string | `250,000 bytes`                                         | Not Applicable                                                      | `true`    |
| title       | string | First 100 characters                                    | date & time of paste creation in UTC                                | `false`   |
| syntax      | string | [Check here](https://dpaste.com/api/v2/syntax-choices/) | `'text'`                                                            | `false`   |
| expiry_days | number | `1` to `365`                                            | `7`                                                                 | `false`   |
| APIToken    | string | Not Applicable                                          | Value set in environment variable `DPASTE_API_TOKEN` or `undefined` | `false`   |

When inside async function:

```js
const options = {
  content: 'sample input',
  title: 'sample title',
  syntax: 'text',
  expiry_days: 10,
};

// Will return dpaste link when successful
let url = await createPaste(options);
console.log(url);
```

Using `.then()`

```js
// Will return dpaste link to console
createPaste(options).then(console.log);
```

### Get Raw Paste

Returns Raw data of dpaste.

There are 2 arguments:

| Arguments | Type   | Required? |
| --------- | ------ | --------- |
| url/id    | string | `true`    |
| APIToken  | string | `false`   |

You can either provide complete URL of the dpaste or the ID of the paste.

When inside async function:

```js
// Will return "sample input" as raw data
let rawData = await getRawPaste(url);
console.log(rawData);
```

Using `.then()`

```js
// Will return raw data to console
getRawPaste(url).then(console.log);
```

### Complete example

```js
const { createPaste, getRawPaste } = require('dpaste-ts');

const options = {
  content: 'sample input',
  title: 'sample title',
  syntax: 'text',
  expiry_days: 10,
  APIToken: 'qwerty12345ag',
};
// This will set the API token into environment variable
process.env.DPASTE_API_TOKEN = options.APIToken;

// This will **not** disable internal delay of 1 second. Set it to true if you wish to disable it.
process.env.DPASTE_DISABLE_DELAY = 'false';

// Use the below code snippet inside async functions to get the data.

// Will return dpaste link when successful
let url = await createPaste(options);
console.log(url);

// Will return "sample input" as raw data
let rawData = await getRawPaste(url);
console.log(rawData);

// Use the below snippets if you wish to use .then()
// Put .catch() to catch any potential errors

// Will return dpaste link to console
createPaste(options).then(console.log);

// Will return raw data to console
getRawPaste(url).then(console.log);
```

## Licence

[MIT](./licence)
