const axios = require('axios').default;
import { Lexer, Expires, PasteFormat } from '../lib/Interfaces';

/**
* Creates Paste on dpaste.org
* @async
* @function CreatePaste
* @param {string} content - The paste data
* @param {string} filename - The title for Paste
* @param {Lexer} lexer - Paste encoding
* @param {Expires} expires - Expiry duration of the paste
* @returns {Promise<PasteFormat>}
*/
export async function CreatePaste(content: string, filename: string, lexer: Lexer = 'text', expires: Expires = '2592000'): Promise<PasteFormat> {
	return await axios({
		url: "https:/dpaste.de/api/",
		method: "post",
		params: {
			content: content,
			filename: filename,
			lexer: lexer,
			expires: expires,
			format: JSON,
		}
	})
		.then((jsdata: PasteFormat) => { return jsdata; })
		.catch((error: PasteFormat) => { return error; })
}

/**
* Gets Paste from dpaste.org
* @async
* @function GetPaste
* @param {string} url - The dpaste url
*/
export async function GetPaste(url: string) {
	const data = await axios.get(url);
	console.log(data);
}
