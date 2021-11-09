extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn dump(arr: &[u8], h:u32, w:u32) -> u8{
    return arr[0]
}

#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    pixels0: Vec<u8>,
    pixels2: Vec<u8>,
}

#[wasm_bindgen]
impl Universe {
    pub fn new(w:u32, h:u32) -> Universe {
        let width = w;
        let height = h;
        let pixels0: Vec<u8> = (0..(w*h*4))
            .map(|_| {0})
            .collect();

        let mut pixels2 = pixels0.clone();
        for y in 0..h {
            for x in 0..w {
                let idx: usize = ((y*w+x)*4) as usize;
                pixels2[idx+3] = 255;
            }
        }
        Universe {width, height, pixels0, pixels2}
    }
    pub fn pixels0(&self) -> *const u8 {
        self.pixels0.as_ptr()
    }
    pub fn pixels2(&self) -> *const u8 {
        self.pixels2.as_ptr()
    }
}