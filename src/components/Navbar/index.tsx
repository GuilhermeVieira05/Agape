import useScrolled from '../../hooks/useScrolled'
import styles from './index.module.scss'

const Navbar = () => {

    const isScrolled = useScrolled()

    return(
        <>
            <div className={!isScrolled ? styles.main : styles.mainScrolled}>
                <div className={styles.menuEsquerda}>
                    <a href="/" className={styles.title}>InterParóquia</a>
                </div>

                <div className={styles.menuDireita}>
                    <a href="/login">Login</a>
                    <a href="/cadastro">Cadastrar</a>
                    <a href=""></a>
                </div>
            </div>
        </>
    )

}

export default Navbar