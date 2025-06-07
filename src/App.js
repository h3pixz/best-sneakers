import React from 'react';
import Card from './Card';
import Header from './Header';


const arr = [
  { name: 'Мужские кроссовки Nike Air Force', price: '$115'},
  { name: 'Мужские кроссовки Nike Air Max 1 Premium', price: '$160'}
];

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
          {
            arr.map((obj) => (
              <Card />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
