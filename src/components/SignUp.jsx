import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { MyUserContext } from '../context/MyUserProvider'



export const SignUp = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const {signUpUser} = useContext(MyUserContext)

      


    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
          const data = new FormData(event.currentTarget)
          //console.log(data.get("email"), data.get("password"), data.get("displayName"))
          await signUpUser(data.get("email"), data.get("password"), data.get("displayName"))
          event.currentTarget.reset()
          
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
      }

  return (
    <div className='signinup' style={{display:"flex", flexDirection:"column"}}>
        
      <form className='signupform' onSubmit={handleSubmit}>
        <h1>Regisztrálj egy fiókot!</h1>
        <input name='displayName' type="text" placeholder='Felhasználónév' required/>
        <input name='email' type="email" placeholder='Email' required/>
        <input name='password' type="password"  placeholder='Jelszó' required/>
        <p>Van már fiókod? Jelentkezz be <a onClick={()=>navigate("/signin")} style={{cursor:"pointer", color:"lightblue"}}>itt</a>!</p>
        <button disabled={loading}>{loading ? "Regisztráció folyamatban" : "Regisztráció"}</button>
      </form>
        
        
    </div>
  )
}