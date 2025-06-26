import React from 'react';

function Wrapper({ onClose, items = [], onRemove }) {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex">
                    <h2 className="mb-20 d-flex justify-between">Избранное <img onClick={onClose} src="./remove.svg" className="removeBtn"></img></h2>
                    <div className="lol">
                        {
                            items.map((obj) => (
                                <div key={obj.id} className="cardItems d-flex align-center mb-20">
                                    <img width={155} height={55} src={obj.imageUrl} className="mr-10"></img>
                                    <div className="mr-10">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} src="./remove.svg" className="removeBtn" alt="Remove"></img>
                                </div>
                            ))
                        }
                    </div>
                    <ul className="cardTotalBlock">
                        <li className="d-flex">
                            <span>Итого: </span>
                            <div></div>
                            <b>$167</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>$14</b>
                        </li>
                    </ul>
                    <button className="btn">Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;