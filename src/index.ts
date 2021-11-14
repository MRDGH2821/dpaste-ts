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
* @returns {PasteFormat}
*/
async function CreatePaste(content: string, filename: string, lexer?: Lexer, expires?: Expires) {
	await axios({
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
* Creates Paste on dpaste.org
* @async
* @function GetPaste
* @param {string} url - The dpaste url 
*/
async function GetPaste(url: string) {
	const data = await axios.get(url);
	console.log(data);
}

module.exports = {
	CreatePaste,
	GetPaste
}
