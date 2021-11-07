extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern {
//     pub fn alert(s: &str);
// }

// #[wasm_bindgen]
// pub fn greet(s: &String) -> String {
//     return "Hello"+s;
// }

// #[wasm_bindgen]
// pub fn add(a:u32, b:u32) {
//     alert(&format!("answer{}!", a+b));
// }

// #[wasm_bindgen]
// pub fn mul(a:u32, b:u32) -> u32 {
//     return a * b;
// } 

#[wasm_bindgen]
pub fn dump(height:u32, width:u32) -> u32{
    return height * width;
}