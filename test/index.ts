import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as paste from '../src';

const API = suite('exports');

API('should export an object', () => {
  assert.type(paste, 'object');
});

API.run();
const data = 'Some sample data for testing dpaste module using uvu';
const title = 'Dpaste Module Test';

const url = paste.createPaste({ content: data, title });

const create = suite('create');

create('Should create a paste & return url', async () => {
  assert.type(await paste.createPaste({ content: data, title }), 'string');
});
create('Should throw error on invalid syntax', async () => {
  try {
    // @ts-ignore
    await paste.createPaste(data, title, 'plain', 1);
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});

create.run();

const get = suite('get');

get('Should get a paste & return String', async () => {
  assert.type(await paste.getRawPaste(await url), 'string');
});

get('Should throw error on invalid input', async () => {
  try {
    await paste.getRawPaste('sgfsgsg');
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});
get.run();

const createAuth = suite('createAuth');

createAuth('Should be able to create paste with API Token', async () => {
  const urlAuth = await paste.createPaste({
    content: `dpaste-ts test case, performed on ${new Date().toUTCString()}`,
    APIToken: process.env.DPASTE_API_TOKEN_GIT,
    title: 'dpaste-ts test case',
    syntax: 'text',
  });
  console.log(urlAuth);
  assert.type(urlAuth, 'string');
});

createAuth.run();
