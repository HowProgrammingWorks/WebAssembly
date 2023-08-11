'use strict';

const fsp = require('node:fs').promises;

(async () => {
  const context = {
    example: {
      addCallback: (res) => {
        console.log({ add: [10, 2], res, expected: 12 });
      },
      subCallback: (res) => {
        console.log({ sub: [20, 5], res, expected: 15 });
      },
    },
  };

  const wasm = await fsp.readFile('./example.wasm');
  const example = await WebAssembly.instantiate(wasm, context);

  const res = example.instance.exports.sum(3, 7);
  console.log({ sum: [3, 7], res, expected: 10 });

  example.instance.exports.add(10, 2);
  example.instance.exports.sub(20, 5);
})();
