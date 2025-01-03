import CardCadastroProps from '../../../types/Card/CardCadastroType'
import redirecionar from '../../../utils/redirecionar'
import styles from './index.module.scss'

const CardCadastro: React.FC<CardCadastroProps> = (props) => {
    return (
        <div className={styles.card} onClick={() => props.path ? redirecionar(props.path) : null}>
            <div className={styles.imageContainer}>
                <img src={props.img} alt={props.title} />
                <h2 className={styles.title}>{props.title}</h2>
            </div>
            <div className={styles.cardContent}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default CardCadastro