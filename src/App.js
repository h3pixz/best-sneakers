import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={64} height={64} src="./logo.png" alt=""></img>
          <h1>BEST SNEAKERS</h1>
        </div>

        <div className="d-flex">
          <p>Главная</p>
          <p>Каталог</p>
          <p>О магазине</p>
          <p>Отзывы</p>
          
        </div>

        <ul className="d-flex align-center">
          <li className="mr-40">
            <img height={15} width={15} src="./love.svg" alt=""></img>
            <span>Избранное</span>
          </li>
          <img width={34} height={34} src="./user.png" alt=""></img>
        </ul>
      </header>

      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
        <Card />
        <Card />
        <Card />
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
