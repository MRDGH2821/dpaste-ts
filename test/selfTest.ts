import * as dp from '../src/index';

dp.CreatePaste('sample').then((url) => {
  console.log(url);
  dp.GetRawPaste(url).then(console.log);
});
