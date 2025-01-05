import React from 'react'
import styles from '../styles/Portfolio.module.css';


const RestrictedCard = ({imageSrc}: {imageSrc:string}) => {
  return (
    <div className={styles.cards}>
        <div className={styles.restricted_card_img}>
            <img src={imageSrc} className={styles.restricted_image} />
            <div className={styles.overlay}>Restricted Content</div>
        </div>
    </div>
  );
};

export default RestrictedCard;
