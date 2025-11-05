import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";
import { addRecipe } from "../mybackend";

export const RecipesForm = () => {

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([""])
  const [steps, setSteps] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)



  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
      e.preventDefault()
      setLoading(true)
      let inputData = {name, ingredients, steps, category}
      console.log(inputData)
      await addRecipe(inputData, file)
      console.log("Recept elmentve")
      setLoading(false)
  }
  const handleChangeIngredients = (index, value) => {
      const newIngredients = [...ingredients]
      newIngredients[index] = value
      setIngredients(newIngredients)
  }
  const handleAddIngredients = () => {
    console.log(ingredients);
    setIngredients(prev => [...prev, ""])
  }
  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected)
    if(selected){
      setPreview(URL.createObjectURL(selected))
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "lightyellow", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <h1 style={{ textAlign: "center" }}>Új recept feltöltése</h1>
      <form action="" onSubmit={handleSubmit}>
  
        <input type="text" placeholder="Recept neve" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <div>
        {ingredients.map((item, index)=>
          
            <div key={index}>
              <input type="text" value={item} placeholder={`${index+1}. hozzávaló`} onChange={(e)=>handleChangeIngredients(index, e.target.value)}/>

            </div>
          
        )}
        <FaPlus onClick={() => setIngredients([...ingredients, ""])}/>
        </div>
        <textarea value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="Elkészítés lépései: " required></textarea>
        <input type="text"  value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Kategória: " required/>
        <input className="file" type="file" accept="image/*" onChange={handleFileChange}/>
        {preview && <img src={preview} alt="előnézet" style={{maxHeight:"200px", objectFit:"cover"}}/>}

        <button type="submit" style={{cursor:"pointer"}}>Mentés</button>
      </form>
      {loading && <div>Loading...</div>}
      <IoClose
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: "5px", left: "5px" }}
      />
    </div>
  );
};
