const { CreatePaste, GetRawPaste } = require("dpaste-ts");
var fs = require("fs");
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

GetRawPaste(url).then(console.log);

//let data260kbsize: number;
fs.readFile("./test/260KB.txt", function(err, data) {
	if (err) {
		return console.error(err);
	}
	CreatePaste(data.toString(), (expiry_days = 1))
		.then(console.log)
		.catch(console.log);

	//  data260kbsize = Buffer.byteLength(data260kb);
});
