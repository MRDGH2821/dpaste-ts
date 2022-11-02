import * as dp from '../src/index';

dp.createPaste({ content: 'sample' }).then((url) => {
  console.log(url);
  dp.getRawPaste(url).then(console.log);
});
