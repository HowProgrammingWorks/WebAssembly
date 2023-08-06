use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
  pub fn callback(res: i32);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

#[wasm_bindgen]
pub fn add_callback(a: i32, b: i32) {
  callback(a + b)
}
