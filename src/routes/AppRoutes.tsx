import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CadastrarObra from '../pages/Cadastrar'

function AppRoutes() {

  return ( 

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cadastro' element={<CadastrarObra/>} />
      </Routes>
    </Router>
    
  )
}

export default AppRoutes
