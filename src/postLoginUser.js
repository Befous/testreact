import { postBiasa } from "./api.js";
import { getValue } from "./element.js";

export default function RegistrasiUser(){
    let target_url = "https://asia-southeast2-befous.cloudfunctions.net/PhilanderNews-RegistrasiUser";
    let username = getValue("username");
    let password = getValue("password");
    let datainjson = {
        "username": username,
        "password": password
    }
    
    postBiasa(target_url,datainjson,responseData);
}

function responseData(result) {
    if (result.message === "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message === "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message === "Berhasil Input data") {
        alert("Berhasil Input data");
    }
}