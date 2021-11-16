const {CreatePaste, GetPaste} = require('dpaste-js');
const fetch = require('cross-fetch').default;

const data = 'Some sample data for testing dpaste module in plain text using axios';
const title = 'Dpaste Module Axios Test';
CreatePaste(data, title, 'text').then(console.log).catch(console.log);

//GetPaste('https://dpaste.com/F5VXWRTCA.txt').then(console.log);
/*
const dat = fetch('https://dpaste.com/45WYTLHUK.txt')
dat.then(val => {
  console.log(val.headers)
})

*/
