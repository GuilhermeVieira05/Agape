import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CadastrarObra from '../pages/Cadastrar'
import Login from '../pages/Login'
import CadastrarServo from '../pages/CadastrarServo'

function AppRoutes() {

  return ( 

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cadastro' element={<CadastrarObra/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro/servo' element={<CadastrarServo/>}/>
      </Routes>
    </Router>
    
  )
}

export default AppRoutes
