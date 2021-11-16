const {CreatePaste, GetPaste} = require('dpaste-js');
const fetch = require('cross-fetch').default;
const axios = require('axios').default;

const data = 'Some sample data for testing dpaste module in plain text using axios. Now with proper error handling';
const title = 'Dpaste Module Axios Test';
CreatePaste(data, title, 'text').then(console.log).catch(console.log);

GetPaste('https://dpaste.com/F5VXWRTCA').then(console.log);
