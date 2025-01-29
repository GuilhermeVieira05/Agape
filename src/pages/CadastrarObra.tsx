import Navbar from "../components/Navbar/NavbarPrincipal"
import styles from "../assets/styles/CadastrarServo.module.scss"
import CadastroServoForm from "../components/Forms/CadastroForm/CadastroServoForm"
import quotes from "../assets/data/quotes.json"
import getRandom from "../utils/getRandom"
import CadastroObra from "../components/Forms/CadastroForm/CadastroObraForm"

const CadastrarObra = () =>{
    const { text, image} = quotes[getRandom(quotes.length)]

    const handleSubmit = () =>{

    }

    return(
        <>
        <Navbar/>
        <div className={styles.main}>
            <div className={styles.form}>
                <h1 className={styles.title}>Cadastro - Obra</h1>
                <CadastroObra
                />
            </div>
            <div className={styles.card}>
                <div className={styles.quotes}>
                    <h2></h2>
                    <p>{text}</p>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default CadastrarObra