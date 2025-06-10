import React from 'react';

function Wrapper(props) {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex">
                    <h2 className="mb-20 d-flex justify-between">Избранное <img onClick={props.onClose} src="./remove.svg" className="removeBtn"></img></h2>
                    <div className="lol">
                        <div className="cardItems d-flex align-center">
                            <img width={155} height={55} src="./1.png" className="mr-10"></img>
                            <div className="mr-10">
                                <p className="mb-5">Мужские кроссовки Nike Air Force</p>
                                <b>$115</b>
                            </div>
                            <img src="./remove.svg" className="removeBtn"></img>
                        </div>
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