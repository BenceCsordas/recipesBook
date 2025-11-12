import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { MyUserContext } from '../context/MyUserProvider'


export const SignUp = () => {
    const navigate = useNavigate()

    const {signUpUser, msg} = useContext(MyUserContext)

      


    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        //console.log(data.get("email"), data.get("password"), data.get("displayName"))
        signUpUser(data.get("email"), data.get("password"), data.get("displayName"))
        event.currentTarget.reset()
      }

  return (
    <div className='signinup' style={{display:"flex", flexDirection:"column"}}>
        
      <form className='signupform' onSubmit={handleSubmit}>
        <h1>Regisztrálj egy fiókot!</h1>
        <input name='displayName' type="text" placeholder='Felhasználónév' required/>
        <input name='email' type="email" placeholder='Email' required/>
        <input name='password' type="password"  placeholder='Jelszó' required/>
        <p>Van már fiókod? Jelentkezz be <a onClick={()=>navigate("/signin")} style={{cursor:"pointer", color:"lightblue"}}>itt</a>!</p>
        <button>Regisztráció</button>
      </form>
        {msg && (msg?.err || msg?.signUp) && <p style={{color:"red", fontWeight:"bold"}}>{msg?.err || msg?.signUp}</p>}
    </div>
  )
}