import React from 'react';
import styles from './Card.module.scss'

function Card({ title, price, imageUrl, onPlus, id}) {
  //Функция клика на кнопку (!isAdded означает повтор действия => вкл и выкл кнопку)
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price});
    setIsAdded(!isAdded);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.kross}>
        <div className="d-flex align-center flex-column">
          <img height={95} width={196} src={imageUrl} alt="" className="kross"></img>
          <h5>{title}</h5>
        </div>
      </div>
      <div className="d-flex justify-between">
        <div className={styles.cena}>
          <span>ЦЕНА:</span>
          <h4>{price}</h4>
        </div>
        <div onClick={onClickPlus} className={styles.plus}>
          <img src={isAdded ? "./galka.svg" : "./plus.svg"} alt="plus" className="plus"></img>
        </div>

      </div>
    </div>
  );
}

export default Card;