import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as paste from '../src';

async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('1 second wait done.');
      resolve(1);
    }, 1000);
  });
}

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
  await delay();
  assert.type(await paste.createPaste({ content: data, title }), 'string');
});
create('Should throw error on invalid syntax', async () => {
  await delay();
  try {
    await paste.createPaste({
      content: data,
      title,
      // @ts-expect-error
      syntax: 'plain',
      expiry_days: 1,
    });
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});

create.run();

const get = suite('get');

get('Should get a paste & return String', async () => {
  await delay();
  assert.type(await paste.getRawPaste(await url), 'string');
});

get('Should throw error on invalid input', async () => {
  await delay();
  try {
    await paste.getRawPaste('should throw error');
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});
get.run();

const createAuth = suite('createAuth');

createAuth('Should be able to create paste with API Token', async () => {
  await delay();
  const urlAuth = await paste.createPaste({
    content: `dpaste-ts test case, performed on ${new Date().toUTCString()}`,
    APIToken: process.env.DPASTE_API_TOKEN_GIT,
    title: 'dpaste-ts test case',
    syntax: 'text',
    expiry_days: 1,
  });
  console.log(urlAuth);
  assert.type(urlAuth, 'string');
});

createAuth.run();
