import * as qs from 'querystring';
import { CreatePasteOptions, APIOptions } from './interfaces';
import httpsRequest from './lib';

/** Delays Function execution
 * @async
 * @function delay
 * @param {number} n - Delay in miliseconds
 * @returns {Promise<1>} - Returns `1` after delay is complete.
 */

async function delay(n: number = 1000): Promise<1> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, n);
  });
}

/**
 * Creates Paste on dpaste.org
 * @async
 * @function createPaste
 * @param {CreatePasteOptions} options - options for creating a new paste
 * @returns {Promise<string>} - URL of Paste
 */
export async function createPaste(options: CreatePasteOptions): Promise<string> {
  const inputData: APIOptions = {
    content: options.content,
    syntax: options.syntax || 'text',
    title: options.title?.substring(0, 100) || new Date().toUTCString(),
    expiry_days: options.expiry_days || 7,
  };
  const url = new URL('https://dpaste.com/api/v2/');
  if (process.env.DPASTE_DISABLE_DELAY !== 'true') {
    await delay(1000);
  }
  return new Promise((resolve, reject) => {
    httpsRequest(
      {
        host: url.host,
        hostname: url.hostname,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'dpaste-ts dpaste wrapper for node.js',
          Authorization: `Bearer ${options.APIToken}`,
        },
      },
      qs.stringify(inputData),
    )
      .then((response) => {
        resolve(response.body);
      })
      .catch(reject);
  });
}

/**
 * Gets Paste from dpaste.org
 * @async
 * @function getRawPaste
 * @param {string} url - The dpaste url
 * @param {string | undefined} APIToken - Dpaste API Token. Can be set using `DPASTE_API_TOKEN` environment variable. (Check Authentication in https://dpaste.com/api/v2/)
 * @returns {Promise<string>} - Raw data from paste
 */
export async function getRawPaste(
  url: string,
  APIToken: string | undefined = process.env.DPASTE_API_TOKEN,
): Promise<string> {
  const newUrl = new URL(`${url.trim()}.txt`, 'https://dpaste.com/');
  if (process.env.DPASTE_DISABLE_DELAY !== 'true') {
    await delay(1000);
  }

  return new Promise((resolve, reject) => {
    httpsRequest({
      host: newUrl.host,
      hostname: newUrl.hostname,
      path: newUrl.pathname,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'dpaste-ts dpaste wrapper for node.js',
        Authorization: `Bearer ${APIToken}`,
      },
    })
      .then((response) => {
        resolve(response.body);
      })
      .catch(reject);
  });
}
