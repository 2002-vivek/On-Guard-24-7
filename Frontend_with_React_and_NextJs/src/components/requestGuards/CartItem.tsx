import styles from "../../styles/requestGuards.module.css";
import React from 'react'

const CartItem = ({title, price, count, setCount, ImageSrc}) => {

    const increment =()=> setCount(count+1);
    const decrement = () => setCount(count>0 ? count-1 : 0);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, price);
        setCount(isNaN(value) ? 0 : Math.max(0, value)); // Fallback to 0 if input is invalid
      };


  return (
    <div className={styles.cart_item}>
        <div className={styles.product}>
            <div className={styles.product_image}>
                <img src={ImageSrc} alt={title} />
            </div>
            <div className={styles.product_info}>
                <p>{title}</p>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
        <div className={styles.quantity_selector}>
            <button className="btn btn-outline-danger decrement" onClick={decrement}>
            -
            </button>
            <input type="text" value={count} onChange={handleInputChange} className={styles.quantity} readOnly />
            <button className="btn btn-outline-success increment" onClick={increment}>
            +
            </button>
        </div>
        <div className={styles.total}>
            <p>Total: </p>
            <p>$ {(count*price).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default CartItem
