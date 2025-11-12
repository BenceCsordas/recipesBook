import React from 'react'
import { useNavigate } from 'react-router'


export const SignUp = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log(data.get("email"), data.get("password"), data.get("display_name"))
    }
  return (
    <div className='signinup'>
        
      <form className='signupform' onSubmit={handleSubmit}>
        <h1>Regisztrálj egy fiókot!</h1>
        <input name='display_name' type="text" placeholder='Felhasználónév' required/>
        <input name='email' type="email" placeholder='Email' required/>
        <input name='password' type="password"  placeholder='Jelszó' required/>
        <p>Van már fiókod? Jelentkezz be <a onClick={()=>navigate("/signin")} style={{cursor:"pointer", color:"lightblue"}}>itt</a>!</p>
        <button>Regisztrálás</button>
      </form>
    </div>
  )
}