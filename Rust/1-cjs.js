'use strict';

const fsp = require('node:fs').promises;

const load = async (fileName, exports) => {
  const wasm = await fsp.readFile(fileName);
  const mod = await WebAssembly.compile(wasm);
  const units = WebAssembly.Module.imports(mod);
  const context = { wbg: {} };
  for (const [i, { name }] of units.entries()) {
    context.wbg[name] = exports[i];
  }
  return await WebAssembly.instantiate(wasm, context);
};

(async () => {
  const callback = (res) => {
    console.log({ res });
  };

  const example = await load('./pkg/example_bg.wasm', [callback]);

  const sum = example.instance.exports.add(3, 7);
  console.log({ sum });

  example.instance.exports.add_callback(3, 7);
})();
