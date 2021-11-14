const {CreatePaste} = require('dpaste-js');

const data = 'Some  sample data for testing dpaste module';
const title = 'Dpaste Module Test';
CreatePaste(data, title).then(console.log);
