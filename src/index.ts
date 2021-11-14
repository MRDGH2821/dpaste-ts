const axios = require('axios').default;
//const qs = require('qs');
import { Lexer, Expires, PasteFormat } from '../lib/Interfaces';
//const FormData = require('form-data');

//const form = new FormData();
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
	const form = new FormData();
	form.append('content', content);
	form.append('lexer', lexer);
	form.append('format', 'JSON');
	form.append('expires', expires);
	form.append('filename', filename);
	return await axios({
		url: "https://dpaste.com/api/",
		method: 'post',
		headers: {
			'Content-Type': "multipart/form-data",
		}
	})
		.then((jsdata: PasteFormat) => { return jsdata; })
		.catch((error: PasteFormat) => { return error; })
	/*
		method: "post",
		data: {
			content: content,
			lexer: lexer,
			format: JSON,
			expires: expires,
			filename: filename
		}

	})
	*/
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
