import React from 'react';
import './App.css';
import InfoList from './components/InfoList'
function App() {
  let dishes = [
    {
      name: 'Салат Цезар',
      price: '70грн',
      time: '15хв',
    },
    {
      name: 'Бульйон',
      price: '45грн',
      time: '15хв',
    },
    {
      name: 'Шашлик',
      price: '80грн',
      time: '25хв',
    },
    {
      name: 'Борщ',
      price: '60грн',
      time: '15хв',
    },

  ]
  return (
    <div className="App">
      <InfoList dishes={dishes} />
    </div>
  );
}

export default App;

