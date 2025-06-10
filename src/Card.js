import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="d-flex align-center flex-column">
        <img height={95} width={196} src="./1.png" alt="" className="kross"></img>
        <h5>{props.title}</h5>
      </div>
      <div className="d-flex justify-between">
        <div className="cena">
          <span>ЦЕНА:</span>
          <h4>{props.price}</h4>
        </div>
        <img src="./plus.svg" alt="plus" className="plus"></img>
      </div>
    </div>
  );
}

export default Card;