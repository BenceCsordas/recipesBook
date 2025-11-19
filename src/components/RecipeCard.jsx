import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { deleteRecipe } from '../mybackend';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { MyUserContext } from '../context/MyUserProvider';

export const RecipeCard = ({id, name,steps, ingredients, imgUrl, deleteUrl, uid, displayName}) => {
    const {user} = useContext(MyUserContext)
    const navigate=useNavigate()

  return (
    <div className='card'>
       
            <h2>{name}</h2>
            <p>{displayName}</p>
        
        
        {/* <h2>{displayName} {uid}</h2> */}
        <div className='hozzavalokBase'>
            <p className='hozzavalok'>Hozzávalók: </p>
            <ul>{ingredients.map(obj=><li>{obj}</li>)}</ul>
        </div>
            {user && user.uid == uid ? <div>
            <MdDeleteForever size={50} onClick={()=>deleteRecipe(id, deleteUrl)} className='del'/>
            <CiEdit size={50} onClick={()=>navigate('/edit/'+id)} className='edit'/>
            </div> : <div> </div>}
       
        <div className='img-container'>
        <img src={imgUrl} alt={name} />
        </div>
        
        <div>
            <p>Elkészítés: </p>
            <p>{steps}</p>
        </div>

        
        
    </div>
  )
}
