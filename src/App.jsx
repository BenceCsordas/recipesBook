import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { RecipesForm } from './pages/RecipesForm'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Header } from './components/Header'
import PwReset from './components/PwReset'
import MyToastify from './components/MyToastify'
import { ToastContainer } from 'react-toastify'
import UserProfile from './pages/UserProfile'
import { useContext } from 'react'
import { MyUserContext } from './context/MyUserProvider'
import { ProtectedRoute } from './components/ProtectedRoute'
import PageNotFound from './components/PageNotFound'
import { MyCard } from './components/MyCard'

function App() {

  return (
    <div className="container">
    <Header/>
    <MyToastify/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/addnew' element={<ProtectedRoute><RecipesForm/></ProtectedRoute>}/>
      <Route path='/edit/:id' element={<ProtectedRoute><RecipesForm/></ProtectedRoute>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/pwreset' element={<PwReset/>}/>
      <Route path='/profile' element={<ProtectedRoute><UserProfile/></ProtectedRoute> }/>
      <Route path='/recipe/:id' element={<MyCard/>}/>
      <Route path='/*' element={<PageNotFound/>}/>

    </Routes>
    </div>
  )
}

export default App
