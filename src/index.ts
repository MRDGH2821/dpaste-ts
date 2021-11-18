const axios = require("axios").default;
import { Syntax, Expiry_Days } from "../lib/Interfaces";
import { isValidSize, isValidExpiry, isValidSyntax } from "../lib/Checkers";

function delay(n: number): any {
  n = n || 1000;
  return new Promise(done => {
    setTimeout(() => {
      done(1);
    }, n);
  });
}
//const form = new FormData();
/**
 * Creates Paste on dpaste.org
 * @async
 * @function CreatePaste
 * @param {string} content - The paste data
 * @param {string} filename - The title for Paste
 * @param {Syntax} syntax - Paste encoding
 * @param {Expiry_Days} expiry_days - Expiry duration of the paste
 * @returns {Promise<string>}
 */
export async function CreatePaste(
  content: string,
  filename: string = new Date().toUTCString(),
  syntax: Syntax = "text",
  expiry_days: Expiry_Days = 7
): Promise<string> {
  delay(1000);

  try {
    if (
      isValidSize(content) &&
      isValidSyntax(syntax) &&
      isValidExpiry(expiry_days)
    ) {
      const { data } = await axios({
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
      });
      return data;
    } else {
      if (isValidSize(content)) {
        throw `Maximum allowed content size is 250,000 bytes. Content Size: ${Buffer.byteLength(
          content
        )} bytes`;
      } else if (isValidSyntax(syntax)) {
        throw `Syntax must be from https://dpaste.com/api/v2/syntax-choices/. Given Syntax: ${syntax}`;
      } else if (isValidExpiry(expiry_days)) {
        throw `Expiry days must be greater than 1 day & not exceed 365 days. Given Days: ${expiry_days}`;
      } else {
        throw `Some unknown error. Probably Rate Limit. Inputs are valid & within range, problem might be in backend.\nContent Size: ${
          new Blob([content]).size
        } bytes.\nGiven Syntax: "${syntax}".\nGiven Days: ${expiry_days}`;
      }
    }
  } catch (error) {
    return String(error);
  }
}

/**
 * Gets Paste from dpaste.org
 * @async
 * @function GetRawPaste
 * @param {string} url - The dpaste url
 * @returns {Promise<string>}
 */
export async function GetRawPaste(url: string): Promise<string> {
  delay(1000);
  if (!/https:\/\/dpaste.com\//gm.test(url)) {
    url = `https://dpaste.com/${url}`;
  }
  try {
    const { data } = await axios.get(`${url}.txt`);
    return data;
  } catch (error) {
    return "Invalid Link";
  }
}
