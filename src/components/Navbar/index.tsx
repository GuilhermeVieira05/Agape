import useScrolled from '../../hooks/useScrolled'
import useScrolledColor from '../../hooks/useScrolledColor'
import styles from './index.module.scss'

const Navbar = () => {

    const isScrolled = useScrolled()
    const bgColor = useScrolledColor()

    return(
        <>
            <div 
            className={styles.main}
            style={{backgroundColor: bgColor}}
            >
                <div className={styles.menuEsquerda}>
                    <a href="/" className={styles.title}>Ágape</a>
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