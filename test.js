const {CreatePaste, GetPaste} = require('dpaste-js');
const fetch = require('cross-fetch').default;
/*
const data = 'Some sample data for testing dpaste module in js';
const title = 'Dpaste Module Test';
CreatePaste(data, title, 'js', 3).then(console.log);
*/
//GetPaste('https://dpaste.com/F5VXWRTCA.txt').then(console.log);
const dat = fetch('https://dpaste.com/45WYTLHUK.txt')
dat.then(val => {
  console.log(val.headers)
})
