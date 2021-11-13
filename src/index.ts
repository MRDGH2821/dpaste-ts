const axios = require('axios').default;
import { Lexer, Expires, jsdata } from '../src/lib/Interfaces';
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
		.then((jsdata: jsdata) => { return jsdata; })
		.catch((error: string) => { return error; })
}

module.exports = {
  CreatePaste,
}
