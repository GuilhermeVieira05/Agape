import Navbar from "../components/Navbar/NavbarPrincipal"
import styles from '../assets/styles/LandingPage.module.scss'
import useDocumentTitle from "../hooks/useDocumentTitle";
import useAOS from "../hooks/useAOS";
import CardVantagens from "../components/Cards/CardVantagens";
import Footer from "../components/Footer";
import logo1 from '../assets/imgs/logo1NoBg.png'
import logo2 from "../assets/imgs/logo2NoBg.png"
import redirecionar from "../utils/redirecionar";

const LandingPage = () =>{

    useDocumentTitle('Ágape')
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
                    text="Gerencie sua Obra Jovem de maneira eficiente! Registre coordenadores, servos e todas as informações importantes em um só lugar. Facilite a organização e mantenha tudo acessível."
                    title="Organização da Obra Jovem"
                    textSide="right"
                />

                <CardVantagens 
                    img="https://www.acidigital.com/imagespp/Cruz-por-que-ir-a-un-retiro-Shutterstock-21032023.jpg?w=680&h=378"
                    text="Planeje e organize retiros com facilidade! Controle participantes, cronogramas, inscrições e tudo o que você precisa para proporcionar uma experiência transformadora."
                    title="Organização de Retiros"
                    textSide="left"
                />

                <CardVantagens 
                    img="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2014/07/formacao_1920-x-1080.-46-600x338.jpg"
                    text="Gerencie eventos internos ou abertos ao público de forma prática. Com o Ágape, você pode organizar palestras, encontros e celebrações, garantindo que tudo aconteça conforme planejado. "
                    title="Eventos Privados e Abertos ao Público"
                    textSide="right"
                />

                <CardVantagens 
                    img="https://blog.1doc.com.br/wp-content/uploads/2023/10/gestao-de-recursos-publicos-scaled.webp"
                    text="Gerencie os recursos da obra de forma fácil e rápida, como materiais/instrumentos para evitar desperdício e economizar!"
                    title="Gestão de Recursos"
                    textSide="left"
                />
            </section>

                <h1>Sobre a Ágape</h1>
            <section className={styles.sobre}>
                <img src={logo2} alt="" />
                <div className={styles.desc}>
                    <p>A Ágape é uma plataforma criada para transformar a forma como as Obras Jovens Católicas são organizadas. Oferecemos ferramentas práticas e intuitivas para facilitar o gerenciamento de servos, atividades, eventos e retiros, promovendo unidade e eficiência na missão de evangelizar jovens. </p>
                    <p>O termo Ágape designa o amor de Deus pelo homem e o amor fraternal entre os homens.</p>
                </div>
            </section>


            <Footer/>
        </div>
        
        </>
    )
}

export default LandingPage