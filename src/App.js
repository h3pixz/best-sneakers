import React from 'react';
import Card from './Card';
import Header from './Header';
import Wrapper from './Wrapper'

const arr = [];

function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);

  //берем все айтемы с BackEnd
  React.useEffect(() => {
    fetch('https://68484c09ec44b9f349406c45.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, [])


  //функция, которая возвращает массив в wrapper
  const onAddToCard = (obj) => {
    setCardItems([...cardItems, obj])
  }



  return (
    <>
      {cardOpened ? <Wrapper items={cardItems} onClose={() => { setCardOpened(false) }} /> : null}
      <Header onClickCard={() => { setCardOpened(true) }} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
