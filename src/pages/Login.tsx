import Navbar from "../components/Navbar"
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