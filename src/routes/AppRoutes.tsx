import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CadastrarObra from '../pages/Cadastrar'
import Login from '../pages/Login'

function AppRoutes() {

  return ( 

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cadastro' element={<CadastrarObra/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    
  )
}

export default AppRoutes
