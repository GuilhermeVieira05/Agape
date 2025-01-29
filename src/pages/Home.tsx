import MenuLateral from "../components/MenuLateral"
import Navbar from "../components/Navbar/NavbarObra"
import useDocumentTitle from "../hooks/useDocumentTitle"

const Home = () =>{

    useDocumentTitle('Ágape - Santa Helena')
    const handleClose = () =>{

    }

    return(
        <>
            <Navbar
                name="Santa Helena"
            />

        </>
    )
}

export default Home