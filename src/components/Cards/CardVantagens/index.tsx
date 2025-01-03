import React from "react";
import CardVantagensProps from "../../../types/Card/CardVantagensType";
import styles from "./index.module.scss";

const CardVantagens: React.FC<CardVantagensProps> = (props) => {
    const textRight = props.textSide == 'right'

  return (
    <div className={textRight ? styles.card : styles.cardLeft}>
      <div className={styles.img}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.text}</p>
      </div>
    </div>
  );
};

export default CardVantagens;