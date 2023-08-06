'use strict';

const fsp = require('node:fs').promises;

(async () => {
  const callback = (res) => {
    console.log({ res });
  };

  const context = {};
  const wasm = await fsp.readFile('./pkg/example_bg.wasm');
  const mod = await WebAssembly.compile(wasm);
  const [unit] = WebAssembly.Module.imports(mod);
  context[unit.module] = { [unit.name]: callback };
  const example = await WebAssembly.instantiate(wasm, context);

  const sum = example.instance.exports.add(3, 7);
  console.log({ sum });

  example.instance.exports.add_callback(3, 7);
})();
