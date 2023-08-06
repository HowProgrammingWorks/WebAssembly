# C++ for Node.js WebAssembly

- Install Emscripten
```
https://github.com/emscripten-core/emsdk.git
```
- Compile to wasm
```
emcc example.c -o example.html
```
- Run CJS and ESM examples
```
node 1-cjs.js
node 2-esm.mjs
```
