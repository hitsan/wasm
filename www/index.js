const changeImage = document.getElementById("up")
const img = document.getElementById("img")

const process = async () => {
  const wasm_bg = await import('../wasm/pkg/wasm_bg.wasm');
  const wasm = await import('../wasm/pkg/wasm.js');

  const cvs = document.getElementById("preview");
  const width = 640;
  const height = 330;
  img.width = width;
  img.height = height;
  cvs.width = width;
  cvs.height = height;
  const ctx = cvs.getContext('2d');

  let share = wasm.Share.new();

  const mem = wasm_bg.memory;
  let pre_img = new Uint8ClampedArray(mem.buffer, share.get_pre() , width * height * 4);
  // let post_img = new Uint8ClampedArray(mem.buffer, share.get_post() , width * height * 4);

  ctx.drawImage(img, 0, 0, width, height);
  const img_pro = ctx.getImageData(0, 0, width, height);

  pre_img.set(img_pro.data);
  let a = share.rev();
  let image = Uint8ClampedArray(a);
  console.log(a);
  const img2 = new ImageData(image, width);
  ctx.putImageData(img2, 0, 0);
}

changeImage.addEventListener('click', process);