extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn dump(height:u32, width:u32) -> u32{
    return height * width;
}