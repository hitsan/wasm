const selectImage = document.getElementById("select")
const changeImage = document.getElementById("change")
const img = document.getElementById("previewImg");

const previewFile = (file) => {
  const preview = document.getElementById('preview');
  const reader = new FileReader();

  reader.onload = (e) => {
    const imageUrl = e.target.result;
    // const img = document.createElement("img");
    img.id = "img"; 
    img.src = imageUrl;
    preview.appendChild(img);
  }

  reader.readAsDataURL(file);
}

const image = async () => {
  const result = await import("../wasm/pkg/wasm.js");
  const wasm_bg = await import("../wasm/pkg/wasm_bg.wasm");

  const img = document.querySelector('img');
  const canvas = document.createElement('canvas');

  const width = img.clientWidth;
  const height = img.clientHeight;
  canvas.width = width;
  canvas.height= height;

  const ctx = canvas.getContext("2d");

  const universe = wasm.Universe.new(width, height);
  const memory = wasm_bg.memory;

  const wasm_pixels0 = new Uint8Array(memory.buffer, universe.pixels0(), width * height * 4);
  const wasm_pixels2 = new Uint8ClampedArray(memory.buffer, universe.pixels2(), width * height * 4);

  const renderLoop = () => {
    ctx.drawImage(video, 0, 0, width, height);

    const img_ = ctx.getImageData(0, 0, canvas.width, canvas.height);
    wasm_pixels0.set(img_.data);
    ctx.putImageData(img2, 0, 0);

  };

  let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

  let ans = result.dump(blob, height, width);
  console.log(ans)
}

const loadImage = () => {
  const files = selectImage.files;
  previewFile(files[0]);
}

selectImage.addEventListener('change', loadImage);
changeImage.addEventListener('click', image);