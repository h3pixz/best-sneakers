import React from 'react';
import Card from './Card';
import Header from './Header';
import Wrapper from './Wrapper'

const arr = [];

function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);

  //берем все айтемы с BackEnd
  React.useEffect(() => {
    fetch('https://68484c09ec44b9f349406c45.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, [])

  return (
    <>
      {cardOpened ? <Wrapper onClose={() => { setCardOpened(false) }} /> : null}
      <Header onClickCard={() => { setCardOpened(true) }} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
