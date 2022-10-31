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

const url = paste.CreatePaste(data, title);

const create = suite('create');

create('Should create a paste & return url', async () => {
  assert.type(await paste.CreatePaste(data, title), 'string');
});
create('Should throw error on invalid syntax', async () => {
  try {
    // @ts-ignore
    await paste.CreatePaste(data, title, 'plain', 1);
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});

create.run();

const get = suite('get');

get('Should get a paste & return String', async () => {
  assert.type(await paste.GetRawPaste(await url), 'string');
});

get('Should throw error on invalid input', async () => {
  try {
    await paste.GetRawPaste('sgfsgsg');
    assert.unreachable('Should have thrown error');
  } catch (error) {
    assert.instance(error, Error);
  }
});
get.run();
