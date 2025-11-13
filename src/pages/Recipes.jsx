import React, { useContext } from 'react'
import { useEffect } from 'react';
import { FaHouseChimney } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router';
import { readRecipes } from '../mybackend';
import { RecipeCard } from '../components/RecipeCard';
import { useState } from 'react';
import { MyUserContext } from '../context/MyUserProvider';

export const Recipes = () => {
  const [recipes, setRecipes]=useState(null)
  const [loading, setLoading] = useState(false)
  const {user} = useContext(MyUserContext)

  
  const {id} = useParams()

  id && console.log(id)

  const navigate = useNavigate()

  useEffect(()=>{
    readRecipes(setRecipes, setLoading)
  }, [])

  return (
    <div className='recipesBase'>
      <div className='recipesTitle' style={{textAlign:'center'}}>
        {loading && <p>loading...</p>}
        {recipes && recipes.length>0 && recipes.map(obj=><RecipeCard key={obj.id} {...obj}/>)}
        {recipes && recipes.length==0 && <h4>Nincsenek receptek feltöltve</h4>}
      </div>
        <button className='receptFeltoltesGomb' onClick={()=>navigate("/addnew")} style={{position:"fixed", bottom:"5px", right:"5px"}}>Új receptek feltöltése</button>
    </div>
  )
}