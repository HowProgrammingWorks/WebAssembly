import fsp from 'node:fs/promises';

const load = async (fileName, exports) => {
  const buffer = await fsp.readFile(fileName);
  const mod = await WebAssembly.compile(buffer);
  const units = WebAssembly.Module.imports(mod);
  const context = { wbg: {} };
  for (const [i, { name }] of units.entries()) {
    context.wbg[name] = exports[i];
  }
  return await WebAssembly.instantiate(mod, context);
};

const callback = (res) => {
  console.log({ res });
};

const example = await load('./pkg/example_bg.wasm', [callback]);

const sum = example.exports.add(3, 7);
console.log({ sum });

example.exports.add_callback(3, 7);
