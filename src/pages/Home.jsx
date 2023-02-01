import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/index';
import Sort from '../components/Sort';

import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

import Pagination from '../components/Pagination/Index';

const Home = ({ inputValue }) => {


    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });
    const [currentPage, setCurrentPage] = React.useState(1)

    React.useEffect(() => {
        setIsLoading(true)
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = inputValue ? `&search=${inputValue}` : ''

        fetch(`https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => res.json())
            .then(json => {
                setItems(json);
                setIsLoading(false)
            });
        window.scrollTo(0, 0)
    }, [categoryId, sortType, inputValue, currentPage])

    const skeletons = [...new Array(6)].map((_, i) => < Skeleton key={i} />);
    const pizzas = items.map((pizza) => < PizzaBlock {...pizza} key={pizza.id} />);

    return (
        <>

            <div className="content__top">
                <Categories category={categoryId} onClickCategory={(i) => setCategoryId(i)} />
                <Sort sort={sortType} onClickSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas
                }

            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </>
    )

}

export default Home

