import fsp from 'node:fs/promises';

const context = {
  example: {
    addCallback: (res) => {
      console.log({ res, expected: 12 });
    },
    subCallback: (res) => {
      console.log({ res, expected: 15 });
    },
  },
};

const wasm = await fsp.readFile('./example.wasm');
const example = await WebAssembly.instantiate(wasm, context);

const sum = example.instance.exports.add(3, 7);
console.log({ sum, expected: 10 });

example.instance.exports.addAsync(10, 2);
example.instance.exports.subAsync(20, 5);
