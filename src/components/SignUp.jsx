import React from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";

export const SignUp = () => {
    const navigate = useNavigate()
  return (
    <div className='signinup'>
        <FaHouseChimney onClick={()=>navigate("/")} style={{fontSize:"30px",position:"absolute", top:"5px", left:"5px"}}/>
      <form className='signupform'>
        <h1>Regisztrálj egy fiókot!</h1>
        <input type="text" placeholder='Felhasználónév' required/><input type="email" placeholder='Email' required/><input type="password"  placeholder='Jelszó' required/>
        <p>Van már fiókod? Jelentkezz be <a onClick={()=>navigate("/signin")} style={{cursor:"pointer", color:"lightblue"}}>itt</a>!</p>
        <button>Regisztrálás</button>
      </form>
    </div>
  )
}