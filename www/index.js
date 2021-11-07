const js = import("./node_modules/@hitsan/wasm/wasm.js");

const textbox1 = document.getElementById("num1")
const textbox2 = document.getElementById("num2")
const sendBtn = document.getElementById("send")

sendBtn.addEventListener('click', ()=>{
  js.then(js => {
    let msg;
    let num1 = parseInt(textbox1.value, 10);
    let num2 = parseInt(textbox2.value, 10);
    console.log(num1);
    msg = js.mul(num1, num2);
    console.log(msg);
    addElement(msg);
  });
})

const addElement = (msg)=>{
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(msg);
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}