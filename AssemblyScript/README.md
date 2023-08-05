# AssemblyScript for Node.js WebAssembly

- Install AssemblyScript
```
npm install assemblyscript
```
- Compile to wasm
```
npx asc example.ts --outFile example.wasm --optimize
```
- Run CJS and ESM examples
```
node 1-cjs.js
node 2-esm.mjs
```
