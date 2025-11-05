import axios from "axios"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "./fireBaseApp"
import imageCompression from "browser-image-compression"


const apikey = import.meta.env.VITE_IMGBB_API_KEY

const imgUrl = "https://api.imgbb.com/1/upload?key=" + apikey
const uploadToImgBB = async (file) => {

    const myFormData = new FormData()
    myFormData.append("image", file)
    try {
        const response = await axios.post(imgUrl, myFormData)
        const {url, delete_url} = response.data.data
        return {url, delete_url}
    } catch (error) {
        console.log("Képfeltöltési hiba: " + error)
    }
}

export const addRecipe = async (recipe, file) => {
    try {
        let imgUrl = ""
        let deleteUrl = ""
        //kicsinyítés
        const compressed = await imageCompression(file, {maxSizeMB:1, useWebWorker:true, maxWidthOrHeight: 800})


        const result = await uploadToImgBB(compressed)
        if(result){
            imgUrl = result.url
            deleteUrl = result.delete_url
            console.log(result)

            const collectionref = collection(db, "recipes")
            await addDoc(collectionref, {...recipe, imgUrl, deleteUrl, timestamp:serverTimestamp()})
        }
    } catch (error) {
        console.log("Nem sikerült hozzáadni! " + error)
    }
}