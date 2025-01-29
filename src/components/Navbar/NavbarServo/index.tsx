import useScrolled from '../../../hooks/useScrolled'
import useScrolledColor from '../../../hooks/useScrolledColor'
import styles from './index.module.scss'
import redirecionar from '../../../utils/redirecionar'


const NavbarServo = () => {

    const isScrolled = useScrolled()
    const bgColor = useScrolledColor()

    return(
        <>
            <div 
            className={!isScrolled ? styles.main : styles.mainScrolled}
            style={{backgroundColor: bgColor}}
            >
                <div className={styles.menuEsquerda}>
                    <a onClick={() => redirecionar('/')} className={styles.title}>Ágape</a>
                </div>

                <div className={styles.menuDireita}>
                    <a onClick={() => redirecionar('/login')}>Login</a>
                    <a onClick={() => redirecionar('/cadastro')}>Cadastrar</a>
                </div>
            </div>
        </>
    )

}

export default NavbarServo