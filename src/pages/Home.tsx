import Navbar from "../components/Navbar"
import styles from '../assets/styles/Home.module.scss'
import useDocumentTitle from "../hooks/useDocumentTitle";
import useAOS from "../hooks/useAOS";
import CardVantagens from "../components/Cards/CardVantagens";
import Footer from "../components/Footer";

const Home = () =>{

    useDocumentTitle('Home')
    useAOS()

    return(
        <>
        <Navbar />
        <div className={styles.main}>
            
            <section className={styles.banner}>
                Á<span>g</span>ape

                <div className={`${styles.arrow} animate-bounce`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"  /* Define a largura */
                        height="24" /* Define a altura */
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </section>

            <div className={styles.parallax}></div>

                <h1>O que oferecemos?</h1>
            <section className={styles.vantagens}>
                <CardVantagens 
                    img="https://static.vecteezy.com/ti/fotos-gratis/t1/6277002-silhueta-de-catolico-cruz-ao-sol-fundo-foto.jpg"
                    text="Organize sua obra. Tenha controle dos servos, dos coordenadores. Deixe tudo registrado em um único lugar!"
                    title="Organização da Obra Jovem"
                    textSide="right"
                />

                <CardVantagens 
                    img="https://www.acidigital.com/imagespp/Cruz-por-que-ir-a-un-retiro-Shutterstock-21032023.jpg?w=680&h=378"
                    text="Com a Ágape você consegue fazer a organização dos seus retiros, "
                    title="Organização de Retiros"
                    textSide="left"
                />

                <CardVantagens 
                    img="https://cdn.pixabay.com/photo/2024/06/01/14/00/ai-8802304_1280.jpg"
                    text="Com a Ágape você consegue fazer a organização dos seus retiros, "
                    title="Organização de Retiros"
                    textSide="right"
                />
            </section>


            <Footer/>
        </div>
        
        </>
    )
}

export default Home