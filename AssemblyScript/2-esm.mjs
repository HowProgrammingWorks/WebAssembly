import fsp from 'node:fs/promises';

const context = {
  imports: {
    callback: (res) => {
      console.log({ res });
    },
  },
};

const wasm = await fsp.readFile('./example.wasm');
const example = await WebAssembly.instantiate(wasm, context);

const sum = example.instance.exports.add(3, 7);
console.log({ sum });

example.instance.exports.addCallback(3, 7);
