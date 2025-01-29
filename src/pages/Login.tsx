import Navbar from "../components/Navbar/NavbarPrincipal"
import useDocumentTitle from "../hooks/useDocumentTitle"

const Login = () =>{

    useDocumentTitle('Login')

    return (
        <>
        <Navbar/>
        </>
    )
}

export default Login