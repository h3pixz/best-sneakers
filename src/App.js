import React from 'react';
import Card from './Card';
import Header from './Header';
import Wrapper from './Wrapper';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);
  const [cardItems, setCardItems] = React.useState([]);

  //берем все айтемы с BackEnd
  React.useEffect(() => {
    axios.get('https://68484c09ec44b9f349406c45.mockapi.io/items').then((res) => {
      setItems(res.data);
    });

    //получение корзины
    axios.get('https://68484c09ec44b9f349406c45.mockapi.io/card').then((res) => {
      setCardItems(res.data);
    });
  }, [])


  //функция, которая возвращает массив в wrapper
  //post -> отдать обьект, get -> забрать
  const onAddToCard = (obj) => {
    console.log(obj)

    if (cardItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://68484c09ec44b9f349406c45.mockapi.io/card/${obj.id}`);
      setCardItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://68484c09ec44b9f349406c45.mockapi.io/card', obj);
      setCardItems((prev) => [...prev, obj]);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://68484c09ec44b9f349406c45.mockapi.io/card/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      {cardOpened ? <Wrapper items={cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="d-flex justify-between flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
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
