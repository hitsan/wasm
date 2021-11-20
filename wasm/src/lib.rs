extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Share {
    width: u32,
    height: u32,
    pre: Vec<u8>,
    post: Vec<u8>,
}

#[wasm_bindgen]
impl Share {
    pub fn new(width: u32, height: u32) -> Share {
        let pre: Vec<u8> = (0..(width*height*4))
            .map(|_| {0})
            .collect();
        let post = pre.clone();
        Share {width, height, pre, post}
    }
    pub fn get_pre(&self) -> *const u8 {
        self.pre.as_ptr()
    }
    pub fn get_post(&self) -> *const u8 {
        self.post.as_ptr()
    }
    pub fn rev(&mut self) {
        let size = (self.width * self.height * 4) as usize;
        for i in 0..size {
            self.post[i] = self.pre[i];
        }

        let mut later = self.post.split_off(size);
        self.post.reverse();
        self.post.append(&mut later);
    }
}