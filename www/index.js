const js = import("./node_modules/@hitsan/wasm/wasm.js");

// const textbox1 = document.getElementById("num1")
// const textbox2 = document.getElementById("num2")
// const sendBtn = document.getElementById("send")

// sendBtn.addEventListener('click', ()=>{
//   js.then(js => {
//     let msg;
//     let num1 = parseInt(textbox1.value, 10);
//     let num2 = parseInt(textbox2.value, 10);
//     console.log(num1);
//     msg = js.mul(num1, num2);
//     console.log(msg);
//     addElement(msg);
//   });
// })

// const addElement = (msg)=>{
//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode(msg);
//   newDiv.appendChild(newContent);

//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

const selectImage = document.getElementById("select")
const changeImage = document.getElementById("change")

const previewFile = (file) => {
  // プレビュー画像を追加する要素
  const preview = document.getElementById('preview');

  // FileReaderオブジェクトを作成
  const reader = new FileReader();

  // ファイルが読み込まれたときに実行する
  reader.onload = (e) => {
    const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
    const img = document.createElement("img"); // img要素を作成
    img.id = "img"; 
    img.src = imageUrl; // 画像のURLをimg要素にセット
    preview.appendChild(img); // #previewの中に追加
    image(imageUrl);
  }

  // いざファイルを読み込む
  reader.readAsDataURL(file);
}

const image = () => {
  const height = changeImage.naturalWidth ;
  const width = changeImage.naturalHeight ;
  const file = changeImage.src;
  let ans;

  const resp = fetch(file);
  const blob = resp.blob();

  js.then(js => {
    ans = js.dump(height, width);
  });
  console.log(ans);
}

const loadImage = () => {
  const files = selectImage.files;
  previewFile(files[0]);
}

selectImage.addEventListener('change', loadImage);
changeImage.addEventListener('click', image);