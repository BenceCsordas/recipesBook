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

function App() {


  return (
    <div className="container">
    <Header/>
    <MyToastify/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/addnew' element={<RecipesForm/>}/>
      <Route path='/edit/:id' element={<RecipesForm/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/pwreset' element={<PwReset/>}/>
    </Routes>
    </div>
  )
}

export default App
