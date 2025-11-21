import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { deleteRecipe } from '../mybackend';
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { MyUserContext } from '../context/MyUserProvider';

export const RecipeCard = ({id, name,steps, ingredients, imgUrl, deleteUrl, uid, displayName, photoURL}) => {
    const {user} = useContext(MyUserContext)
    const navigate=useNavigate()

  return (
    // onClick={()=>navigate('/recipe/'+id)}
    <div className='card'>
           
            <img src={imgUrl} alt={name} />

            <div>
            <h2>{name}</h2>
            <div style={{display:"flex", gap:"2px"}}>
            <img src={photoURL} alt="" className='userPhoto'/>
            <p>{displayName}</p>
            </div>
            {user && user.uid == uid ? <div>
            <MdDeleteForever size={50} onClick={()=>deleteRecipe(id, deleteUrl)} className='del'/>
            <CiEdit size={50} onClick={()=>navigate('/edit/'+id)} className='edit'/>
            </div> : <div> </div>}

            </div>
            <button onClick={()=>navigate('/recipe/'+id)}>Recept megtekintése</button>
        
        
        
        {/* <div className='hozzavalokBase'>
            <p className='hozzavalok'>Hozzávalók: </p>
            <ul>{ingredients.map(obj=><li>{obj}</li>)}</ul>
        </div>
       
        
        <div>
            <p>Elkészítés: </p>
            <p>{steps}</p>
        </div> */}

        
        
    </div>
  )
}
