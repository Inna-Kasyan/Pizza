import './scss/app.scss'
import React from 'react'
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import pizzas from '../src/assets/db.json'
import Skeleton from './components/PizzaBlock/Skeleton.jsx';



function App() {

  const [items, setItems] = React.useState([])

  React.useState(fetch('https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items').then(res => res.json()).then(json => setItems(json)), [])

  fetch('https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items').then(res => res.json()).then(json => setItems(json))

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => < Skeleton {...pizza} key={pizza.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
