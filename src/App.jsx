import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { RecipesForm } from './pages/RecipesForm'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Header } from './components/Header'

function App() {


  return (
    <div className="container">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/addnew' element={<RecipesForm/>}/>
      <Route path='/edit/:id' element={<RecipesForm/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </div>
  )
}

export default App
