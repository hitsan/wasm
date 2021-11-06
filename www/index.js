const js = import("./node_modules/@hitsan/wasm/wasm.js");
js.then(js => {
  js.add(1,2);
});

const getText = () => {
  const textbox = document.getElementById("message")
  textbox.value = "wasm"
}