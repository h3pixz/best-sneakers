import React from 'react';
import Card from './Card';
import Header from './Header';


const arr = [
  { name: 'Мужские кроссовки Nike Air Force', price: '$115', imageUrl: "./1.png" },
  { name: 'Мужские кроссовки Nike Air Max 1 Premium', price: '$160', imageUrl: "./2.png" },
  { name: 'Мужские кроссовки Nike Pegasus 41', price: '$140', imageUrl: "./3.png" },
  { name: 'Мужские кроссовки Nike Air Pegasus Wave', price: '$125', imageUrl: "./4.png" }
];

function App() {
  return (
    <>
      <div className="wrapper clear">
        <div style={{display: 'none'}} className="overlay">
          <div className="drawer d-flex">
            <h2 className="mb-20 d-flex justify-between">Избранное <img src="./remove.svg" className="removeBtn"></img></h2>
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

        <Header />
        <div className="content">
          <h1>Все кроссовки</h1>
          <div className="d-flex justify-between">
            {arr.map((obj) => (
              <Card
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
