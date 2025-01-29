import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Cadastrar from '../pages/Cadastrar'
import Login from '../pages/Login'
import CadastrarServo from '../pages/CadastrarServo'
import CadastrarObra from '../pages/CadastrarObra'
import Home from '../pages/Home'

function AppRoutes() {

  return ( 

    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/cadastro' element={<Cadastrar/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro/servo' element={<CadastrarServo/>}/>
        <Route path='/cadastro/obra' element={<CadastrarObra/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

export default AppRoutes
