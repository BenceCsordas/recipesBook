import React, { useContext, useState } from 'react'
import { MyUserContext } from '../context/MyUserProvider'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'


const UserProfile = () => {
    const {user, avatarUpdate, deleteAccount} = useContext(MyUserContext)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    

    const handleFileChange=(e)=>{
    const selected = e.target.files[0]
    setFile(selected)
    if(selected){
      setPreview(URL.createObjectURL(selected))
    }
  }
    const handleSubmit = async (event) => {
      event.preventDefault()
      setLoading(true)
      if(!file) return
      try {
        await avatarUpdate(file)
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
    }

    const handleDelete = async () => {

      if(window.confirm("Biztosan törölni akarja fiókját?")){
        const pw = prompt("Add meg a jelszavad a fiók törléséhez: ")
        await deleteAccount(pw)
      }

    }
    
  return (
    <div className='signinup' style={{display:"flex", flexDirection:"column"}}>
        <form className='signinform profile' onSubmit={handleSubmit}>
        <h1>Profil módosítása</h1>
        <div>
            <h4>Felhasználónév: {user?.displayName}</h4>
            <p>Email cím: {user?.email}</p>
            {user?.photoURL && (<img style={{width:"50px", height:"50px", borderRadius:"50%", objectFit:"cover"}} src={user?.photoURL} alt="profilkép" />)}
        </div>
        <label>Új profilkép: </label>
         <input id="file-upload" type="file" accept='image/*' onChange={handleFileChange}/>
         <button type="submit" disabled={loading}>{loading ? "Mentés..." : "Profil frissítése"}</button>
         {preview && <img src={preview} alt='előnézet' />}
      </form>
      <button className='delUser' onClick={handleDelete}>Fiók törlése</button>

      
      
    </div>
  )
}

export default UserProfile
