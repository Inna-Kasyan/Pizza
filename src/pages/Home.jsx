
import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/index';
import Sort from '../components/Sort';

import Skeleton from '../components/PizzaBlock/Skeleton.jsx';



const Home = () => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });


    React.useEffect(() => {
        setIsLoading(true)
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''

        fetch(`https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(json => {
                setItems(json);
                setIsLoading(false)
            });
        window.scrollTo(0, 0)
    }, [categoryId, sortType])


    return (
        <>
            <div className="content__top">
                <Categories category={categoryId} onClickCategory={(i) => setCategoryId(i)} />
                <Sort sort={sortType} onClickSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, i) => < Skeleton key={i} />) :
                    items.map((pizza) => < PizzaBlock {...pizza} key={pizza.id} />)}
            </div>
        </>
    )

}

export default Home

