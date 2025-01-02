import Navbar from "../components/Navbar"
import styles from '../assets/styles/Home.module.scss'

const Home = () =>{
    return(
        <>
        <Navbar />
        <div className={styles.main}>
            
            <section className={styles.banner}>
                Ágape
            </section>

            <section className={styles.algo}>
                <p></p>
            </section>

        </div>
        
        </>
    )
}

export default Home