const { CreatePaste, GetRawPaste } = require("dpaste-ts");
const data =
	"Some sample data for testing dpaste module in plain text using axios. Now with proper error handling";
const title = "Dpaste Module Axios Test";

CreatePaste(data, title, "text", 1)
	.then(data => {
		console.log(data);
		GetRawPaste(data).then(console.log);
	})
	.catch(console.log);
