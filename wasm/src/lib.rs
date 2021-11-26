extern crate wasm_bindgen;
extern crate image;
extern crate imageproc;

use wasm_bindgen::prelude::*;
const WIDTH:u32 = 640;
const HEIGHT:u32 = 330;

#[wasm_bindgen]
pub struct Share {
    pre: Vec<u8>,
    post: Vec<u8>,
}

#[wasm_bindgen]
impl Share {
    pub fn new() -> Share {
        let pre: Vec<u8> = (0..(WIDTH*HEIGHT*4))
            .map(|_| {0})
            .collect();
        let post = pre.clone();
        Share {pre, post}
    }
    pub fn get_pre(&self) -> *const u8 {
        self.pre.as_ptr()
    }
    pub fn get_post(&self) -> *const u8 {
        self.post.as_ptr()
    }
    pub fn rev(&mut self) -> Vec<u8> {
        let arr = self.pre.clone();
        let rgba_image = image::RgbaImage::from_vec(WIDTH, HEIGHT, arr);
        let rgba_image = rgba_image.unwrap();

        imageproc::edges::canny()

        let mut index = 0;
        for h in 0..HEIGHT {
            for w in 0..WIDTH {
                let rgba = rgba_image.get_pixel(w, h);
                for c in 0..4 {
                    self.post[index] = rgba[c];
                    index += 1;
                }
            }
        }
        return self.post.clone()
    }
}