import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { deleteRecipe } from '../mybackend';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router';

export const RecipeCard = ({id, name,steps, ingredients, imgUrl, deleteUrl, uid=null, displayName=null}) => {

    const navigate=useNavigate()

  return (
    <div className='card'>
        <h1>{name}</h1>

        <h2>{displayName} {uid}</h2>
        <div className='hozzavalokBase'>
            <p className='hozzavalok'>Hozzávalók: </p>
            <ul>{ingredients.map(obj=><li>{obj}</li>)}</ul>
        </div>
        
            <MdDeleteForever size={50} onClick={()=>deleteRecipe(id, deleteUrl)} className='del'/>
            <CiEdit size={50} onClick={()=>navigate('/edit/'+id)} className='edit'/>
       
        
        
        <img src={imgUrl} alt={name} />
        <div>
            <p>Elkészítés: </p>
            <p >{steps}</p>
        </div>

        
        
    </div>
  )
}
