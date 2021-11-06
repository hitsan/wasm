const js = import("./node_modules/@hitsan/wasm/wasm.js");
js.then(js => {
  js.greet(1,2);
});