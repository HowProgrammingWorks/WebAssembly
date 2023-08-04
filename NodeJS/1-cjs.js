'use strict';

const fsp = require('node:fs').promises;

(async () => {
  const wasm = await fsp.readFile('./pkg/example_bg.wasm');
  const example = await WebAssembly.instantiate(wasm);
  const sum = example.instance.exports.add(3, 7);
  console.log(sum);
})();
