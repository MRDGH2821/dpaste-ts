const { CreatePaste, GetPaste } = require("dpaste-js");

const data =
	"Some sample data for testing dpaste module in plain text using axios. Now with proper error handling";
const title = "Dpaste Module Axios Test";
let url = "https://dpaste.com/7TLQB5P7B";

CreatePaste(data, title, "text", 1)
	.then(data => {
		url = data;
		console.log(data);
	})
	.catch(console.log);

GetPaste(url).then(console.log);
