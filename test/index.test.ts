// eslint-disable-next-line import/no-extraneous-dependencies
import { setTimeout } from 'timers/promises';
import {
  beforeAll, describe, expect, test,
} from '@jest/globals';
import * as paste from '../src/index';

const content = 'Some sample data for testing dpaste module using jest';
const title = 'Dpaste Module Test';

const { createPaste, getRawPaste } = paste;
const pasteURL = createPaste({ content, title });

async function delay(n: number = 1000): Promise<1> {
  return setTimeout(n, 1);
}

describe('Exports', () => {
  test('paste should be an object', () => expect(typeof paste).toBe('object'));
  test('createPaste should be a function', () => expect(typeof createPaste).toBe('function'));
  test('getRawPaste should be a function', () => expect(typeof getRawPaste).toBe('function'));
});

describe('Paste creation', () => {
  beforeAll(async () => {
    await delay();
  });

  test('Should return a string url', async () => {
    const result = await createPaste({ content, title });
    return expect(typeof result).toBe('string');
  });

  test('Should throw an error on invalid syntax', async () => expect(
    createPaste({
      content,
      title,
      // @ts-expect-error
      syntax: 'plain',
      expiry_days: 1,
    }),
  ).rejects.toThrowError());

  test('Should throw an error on invalid expiry_days', async () => expect(
    createPaste({
      content,
      title,
      syntax: 'text',
      // @ts-expect-error
      expiry_days: 400,
    }),
  ).rejects.toThrowError());
});

describe('Get paste', () => {
  beforeAll(async () => {
    await delay();
  });
  test('Should get a paste & return String', async () => {
    const result = await getRawPaste(await pasteURL);
    expect(typeof result).toBe('string');
  });

  test('Should throw error on invalid input', async () => {
    await expect(getRawPaste('should throw error')).rejects.toThrowError();
  });
});

describe('Authentication test', () => {
  beforeAll(async () => {
    await delay();
  });

  test('Should be able to create paste with API Token', async () => {
    const result = await createPaste({
      content: `dpaste-ts test case, performed on ${new Date().toUTCString()}`,
      APIToken: process.env.DPASTE_API_TOKEN_GIT,
      title: 'dpaste-ts test case',
      syntax: 'text',
      expiry_days: 1,
    });
    expect(typeof result).toBe('string');
  });
});
