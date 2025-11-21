import axios from "axios"
import imageCompression from "browser-image-compression"

const API_URL = "https://recipe-backend-rust-five.vercel.app/api/"

const convertToBase64 = (file) => {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)//ha nem sikerül beolvasni ez hívódik meg.
    })
}


//feltöltés
export const uploadImage = async (file) => {
    try {
        const compressed = await imageCompression(file, {maxSizeMB:1, useWebWorker:true, maxWidthOrHeight: 800})
        const base64 = await convertToBase64(compressed)
        const resp = await axios.post(API_URL + "uploadImage", {image:base64})
        return resp.data

    } catch (error) {
        console.log("Upload failed: ", error)
        return null
    }
}