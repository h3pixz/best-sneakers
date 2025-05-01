import React from 'react';
import Card from './Card';
import Header from './Header';
function App() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </>
  );
}

export default App;
