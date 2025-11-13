import React, { useContext, useEffect } from 'react'
import { toast, ToastContainer } from "react-toastify"
import { MyUserContext } from '../context/MyUserProvider'
import { useNavigate } from 'react-router'


const MyToastify = ({err, signUp, resetPw}) => {
    const {msg, setMsg} = useContext(MyUserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(err){
            toast.error(err, {position:"top-center"})
            setMsg({})
        }
        else if(signUp){
            toast.success(signUp, {position:"top-center"})
            setMsg({})
        }else if(resetPw){
            toast.success(resetPw, {position:"top-center"})
            setMsg({})
        }
    },[err, signUp, resetPw])
  return (
    <>
        <ToastContainer/>
    </>
    
  )
}

export default MyToastify
