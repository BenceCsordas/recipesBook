import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { MyUserContext } from '../context/MyUserProvider'
import { readRecipe } from '../mybackend'

export const MyCard = () => {
  const {user} = useContext(MyUserContext)
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([""])
  const [steps, setSteps] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const [recipe, setRecipe] = useState(null)
  const navigate = useNavigate()

  const {id} = useParams()
  //console.log(id);
  console.log(recipe)

  useEffect(()=>{
    if(id)
      readRecipe(id, setRecipe)
  },[id]) 

  useEffect(()=>{
    if(recipe){
      setName(recipe.name)
      setCategory(recipe.category)
      setIngredients(recipe.ingredients)
      setSteps(recipe.steps)
      
      setPreview(recipe.imgUrl)
    }
  },[recipe])

  return (
    <div className='openedRecipe'>
      <img src={preview} alt="" />
      <h1>
        {name}
      </h1>
        {/* <img src={user?.photoURL} alt="" style={{width:"50px", height:"50px", borderRadius:"50%"}}/> */}
      <h2>
      {category}
      </h2>
      <hr style={{width:"75%"}}/>
      <div className='openedBody'>
        <div className='openedInner'>
        <h2>Hozzávalók:</h2>
        <ul>{ingredients.map(obj=><li>{obj}</li>)}</ul>
      </div>
      <div className='openedInner'>
        <h2>Elkészítés lépései:</h2>
        <p>{steps}</p>
      </div>
      </div>
        <button onClick={()=>navigate("/recipes")}>Vissza a receptekhez</button>
      
    </div>
  )
}


