import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";
import { MyUserContext } from '../context/MyUserProvider';
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
     const navigate = useNavigate()
     const {user, logoutUser} = useContext(MyUserContext)
    console.log(user)
  return (
    <header>
        <FaHouseChimney onClick={()=>navigate("/")} style={{fontSize:"30px"}} className='house'/>
      {user ? 
      
        <div className='headerBtn'>
          
            <div onClick={()=>navigate('/profile')}>
              
              {user?.photoURL ? (<img style={{width:"30px", height:"30px", borderRadius:"50%", objectFit:"cover"}} src={user.photoURL} alt="" />) : 
              <RxAvatar  size={50} style={{color:"white"}} title={user?.displayName} />
              }
            </div>
          
            <span onClick={()=>logoutUser()}>
                Kijelentkezés
            </span>
        </div>
        :
        <div className='headerBtn'>
            <span onClick={() => navigate("/signin")}>
              Bejelentkezés
            </span>
      <span onClick={() => navigate("/signup")}>
          Regisztrálás
      </span>
        </div>

    }
      
    </header>


   





  )
}


