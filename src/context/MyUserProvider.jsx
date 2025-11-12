import React, { useState } from 'react'
import { createContext } from 'react'

export const  MyUserContext =  createContext() //tartály az adatoknak
export const MyUserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    
    
    return (
        <div>
          <MyUserContext.Provider value={{user}}>
            {children}
          </MyUserContext.Provider>
        </div>
  )
}

