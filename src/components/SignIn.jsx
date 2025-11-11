import React from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";

export const SignIn = () => {
    const navigate = useNavigate()
  return (
    <div className='signinup'>
        <FaHouseChimney onClick={()=>navigate("/")} style={{fontSize:"30px",position:"absolute", top:"5px", left:"5px"}}/>
      <form className='signinform'>
        <h1>Jelentkezz be a fiókodba!</h1>
        <input type="email" placeholder='Email' required/><input type="password"  placeholder='Jelszó' required/>
        <p>Nincs fiókod? Csinálj egyet <a onClick={()=>navigate("/signup")} style={{cursor:"pointer", color:"lightblue"}}>itt</a>!</p>
        <button>Bejelentkezés</button>
      </form>
    </div>
  )
}

