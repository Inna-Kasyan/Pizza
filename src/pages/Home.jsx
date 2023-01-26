
import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import pizzas from '../assets/db.json'
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';



const Home = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => { fetch('https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items').then(res => res.json()).then(json => setItems(json), setIsLoading(false), window.scrollTo(0, 0)) }, [])
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, i) => < Skeleton key={i} />) :
                    pizzas.map((pizza) => < PizzaBlock {...pizza} key={pizza.id} />)}
            </div>
        </>
    )

}

export default Home

