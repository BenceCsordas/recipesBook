import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../fireBaseApp'
import { disableNetwork } from 'firebase/firestore'

export const  MyUserContext =  createContext() //tartály az adatoknak
export const MyUserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [msg, setMsg] = useState({})

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
      })
      return () => unsubscribe() //leiratkozunk a ki-, bejelentkezés figyeléséről
    },[])
    
    const signUpUser = async (email, password, displayName) =>{
        console.log(email, password, displayName)
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          await updateProfile(auth.currentUser, {displayName})
          await sendEmailVerification(auth.currentUser)
          
          console.log("Aktiválja az e-mail címét!")
          console.log("Sikeres regisztráció!")
          setMsg({signUp:"Kattints az email címedre küldött aktiváló linkre!"})
          setMsg(prev => delete prev.err)
          logoutUser()
        } catch (error) {
          console.log(error)
          setMsg({err:error.message})
        }
    }
    
    const logoutUser = async () => {
      await signOut(auth)
      setMsg(prev => delete prev.signIn)
    }

    const signInUser = async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("Sikeres bejelentkezés!")
        const currentUser = auth.currentUser
        if(!currentUser.emailVerified){
          setMsg("Kérlek kattints az aktiváló linkre")
          setMsg(prev => delete prev.signIn)
          logoutUser()
          return
        }
        setMsg(prev => delete prev.err)
        setMsg({signIn:true})
      } catch (error) {
        console.log(error)
        setMsg({err:error.message})
      }
    }


    return (
        <div>
          <MyUserContext.Provider value={{user, signUpUser, logoutUser, signInUser, msg}}>
            {children}
          </MyUserContext.Provider>
        </div>
  )
}

