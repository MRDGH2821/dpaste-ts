const axios = require('axios').default;
//const qs = require('qs');
const fetch = require('cross-fetch').default;
import { Syntax, Expiry_Days } from '../lib/Interfaces';
//const FormData = require('form-data');

//const form = new FormData();
/**
* Creates Paste on dpaste.org
* @async
* @function CreatePaste
* @param {string} content - The paste data
* @param {string} filename - The title for Paste
* @param {Syntax} syntax - Paste encoding
* @param {Expiry_Days} expiry_days - Expiry duration of the paste
* @returns {Promise<String>}
*/
export async function CreatePaste(content: string, filename: string, syntax: Syntax = 'text', expiry_days: Expiry_Days = 7): Promise<String> {
	/*
	const res = await fetch('https://dpaste.com/api/v2/', {
		method: 'POST',
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: "content=" + encodeURIComponent(content) + "&syntax=" + encodeURIComponent(syntax) + "&title=" + encodeURIComponent(filename) + "&expiry_days" + encodeURIComponent(expiry_days),
	})
	return res.text();
*/
	return await axios({
		url: "https://dpaste.com/api/v2/",
		method: 'POST',
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		data: "content=" + encodeURIComponent(content) + "&syntax=" + encodeURIComponent(syntax) + "&title=" + encodeURIComponent(filename) + "&expiry_days" + encodeURIComponent(expiry_days),
	})
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
