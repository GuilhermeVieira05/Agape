import ModalProps from "../../../types/Modal/ModalProps";
import styles from "./index.module.scss";

const ModalConfirm: React.FC<ModalProps> = (props) => {
  if (!props.show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        <div className={styles.header}>
          <img src={props.img} alt="Logo" className={styles.logo} />
          <h2>{props.title}</h2>
          <button onClick={() => props.onClose()} className={styles.closeBtn}>x</button>
        </div>

        <div className={styles.footer}>
          <button onClick={props.onConfirm} className={styles.confirmBtn}>Sim</button>
          <button onClick={props.onCancel} className={styles.cancelBtn}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;