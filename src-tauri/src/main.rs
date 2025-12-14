// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]



use tauri::command;
use std::fs;
use base64::decode;

#[command]
fn save_image(base64: String) -> Result<(), String> {
    let bytes = decode(base64).map_err(|e| e.to_string())?;

    fs::write("drawing.png", bytes).map_err(|e| e.to_string())?;
    Ok(())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![save_image])
    .run(tauri::generate_context!())
    .expect("error while running tauri app");
}

// fn main() {
//     aluno_lib::run()
// }
