import styles from '../styles/Portfolio.module.css';
import React from 'react'

const Card = ({imageSrc, heading}:{imageSrc:string; heading:string}) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card_img}>
        <img src={imageSrc} className={styles.image} />
      </div>
      <div className={styles.card_heading}>
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default Card;
