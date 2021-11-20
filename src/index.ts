const axios = require("axios").default;
import { Syntax, Expiry_Days } from "./interfaces";

/** Delays Function execution
 * @function delay
 * @param {number} n - Delay in miliseconds
 * @returns {Promise<any>} Promise object which does nothing for given miliseconds
 */

function delay(n: number): any {
  n = n || 1000;
  return new Promise(done => {
    setTimeout(() => {
      done(1);
    }, n);
  });
}

/**
 * Creates Paste on dpaste.org
 * @async
 * @function CreatePaste
 * @param {string} content - The paste data
 * @param {string} filename - The title for Paste
 * @param {Syntax} syntax - Paste encoding
 * @param {Expiry_Days} expiry_days - Expiry duration of the paste
 * @returns {Promise<string>} - URL of Paste
 */
export async function CreatePaste(
  content: string,
  filename: string = new Date().toUTCString(),
  syntax: Syntax = "text",
  expiry_days: Expiry_Days = 7
): Promise<string> {
  delay(1000);
  return await axios({
    url: "https://dpaste.com/api/v2/",
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data:
      "content=" +
      encodeURIComponent(content) +
      "&syntax=" +
      encodeURIComponent(syntax) +
      "&title=" +
      encodeURIComponent(filename) +
      "&expiry_days" +
      encodeURIComponent(expiry_days)
  })
    .then(function(response: any) {
      return response.data;
    })
    .catch(function(error: any) {
      return error.response.data;
    });
}

/**
 * Gets Paste from dpaste.org
 * @async
 * @function GetRawPaste
 * @param {string} url - The dpaste url
 * @returns {Promise<string>} - Raw data from paste
 */
export async function GetRawPaste(url: string): Promise<string> {
  if (!/https:\/\/dpaste.com\//gm.test(url)) {
    url = `https://dpaste.com/${url}`;
  } else if (/\n/.test(url)) {
    url = url.slice(0, url.length - 1);
  }
  delay(1000);
  return await axios
    .get(`${url}.txt`)
    .then(function(response: any) {
      return String(response.data);
    })
    .catch(function(error: any) {
      const err = error.toJSON();
      return `Error ${error.response.status}: ${error.response.statusText}\n${err.message}`;
    });
}
export * from "./interfaces";
