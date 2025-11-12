import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";
import { MyUserContext } from '../context/MyUserProvider';
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
     const navigate = useNavigate()
     const {user} = useContext(MyUserContext)
     console.log(user)
  return (
    <header>
        <FaHouseChimney onClick={()=>navigate("/")} style={{fontSize:"30px"}} className='house'/>
      {user ? 
      
        <div className='headerBtn'>
            <RxAvatar size={50} style={{color:"white"}}/>
            <span>
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


