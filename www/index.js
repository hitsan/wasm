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

  const canvas = document.getElementById("canvas");
  canvas.width = img.naturalWidth;
  canvas.height= img.naturalHeight;

  const ctx = canvas.getContext("2d");
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = '64px serif';

  let ans = result.dump(height, width);
}

const loadImage = () => {
  const files = selectImage.files;
  previewFile(files[0]);
}

selectImage.addEventListener('change', loadImage);
changeImage.addEventListener('click', image);