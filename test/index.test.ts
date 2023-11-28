// eslint-disable-next-line import/no-extraneous-dependencies
import { setTimeout } from 'timers/promises';
import {
  beforeAll, describe, expect, test,
} from '@jest/globals';
import * as paste from '../src/index';

const content = 'Some sample data for testing dpaste module using uvu';
const title = 'Dpaste Module Test';

const url = paste.createPaste({ content, title });

async function delay(n: number = 1000): Promise<1> {
  return setTimeout(n, 1);
}

describe('Exports', () => {
  test('paste should be an object', () => expect(typeof paste).toBe('object'));
});

describe('Paste creation', () => {
  beforeAll(async () => {
    await delay();
  });

  test('Should return a string url', async () => {
    const result = await paste.createPaste({ content, title });
    return expect(typeof result).toBe('string');
  });

  test('Should throw an error on invalid syntax', async () => expect(
    paste.createPaste({
      content,
      title,
      // @ts-expect-error
      syntax: 'plain',
      expiry_days: 1,
    }),
  ).rejects.toThrowError('API Error'));
});

describe('Get paste', () => {
  beforeAll(async () => {
    await delay();
  });
  test('Should get a paste & return String', async () => {
    const result = await paste.getRawPaste(await url);
    expect(typeof result).toBe('string');
  });

  test('Should throw error on invalid input', async () => {
    await expect(paste.getRawPaste('should throw error')).rejects.toThrowError('API Error');
  });
});

describe('Authentication test', () => {
  beforeAll(async () => {
    await delay();
  });

  test('Should be able to create paste with API Token', async () => {
    const result = await paste.createPaste({
      content: `dpaste-ts test case, performed on ${new Date().toUTCString()}`,
      APIToken: process.env.DPASTE_API_TOKEN_GIT,
      title: 'dpaste-ts test case',
      syntax: 'text',
      expiry_days: 1,
    });
    expect(typeof result).toBe('string');
  });
});
