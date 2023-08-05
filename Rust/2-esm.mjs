import fsp from 'node:fs/promises';

const wasm = await fsp.readFile('./pkg/example_bg.wasm');
const example = await WebAssembly.instantiate(wasm);
const sum = example.instance.exports.add(3, 7);
console.log(sum);
