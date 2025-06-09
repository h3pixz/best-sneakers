import React from 'react';
import Card from './Card';
import Header from './Header';


const arr = [
  { name: 'Мужские кроссовки Nike Air Force', price: '$115', imageUrl: "./1.png"},
  { name: 'Мужские кроссовки Nike Air Max 1 Premium', price: '$160', imageUrl: "./2.png"},
  { name: 'Мужские кроссовки Nike Pegasus 41', price: '$140', imageUrl: "./3.png"},
  { name: 'Мужские кроссовки Nike Air Pegasus Wave', price: '$125', imageUrl: "./4.png"}
];

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
          {arr.map((obj) => (
            <Card
            title = {obj.name} 
            price = {obj.price}
            imageUrl = {obj.imageUrl}
            onClick = {() => console.log(obj)} 
          />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
