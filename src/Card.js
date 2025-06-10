import React from 'react';
import styles from './Card.module.scss'

function Card(props) {
  //Функция клика на кнопку (!isAdded означает повтор действия => вкл и выкл кнопку)
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };


  return (
    <div className={styles.card}>
      <div className={styles.kross}>
        <div className="d-flex align-center flex-column">
          <img height={95} width={196} src={props.imageUrl} alt="" className="kross"></img>
          <h5>{props.title}</h5>
        </div>
      </div>
      <div className="d-flex justify-between">
        <div className={styles.cena}>
          <span>ЦЕНА:</span>
          <h4>{props.price}</h4>
        </div>
        <div onClick={onClickPlus} className={styles.plus}>
          <img src={isAdded ? "./galka.svg" : "./plus.svg"} alt="plus" className="plus"></img>
        </div>

      </div>
    </div>
  );
}

export default Card;