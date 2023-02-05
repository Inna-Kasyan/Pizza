import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/index';
import Sort from '../components/Sort';

import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

import Pagination from '../components/Pagination/Index';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const Home = () => {

    const { categoryId, sort } = useSelector((state) => state.filter)
    const dispatch = useDispatch()






    const { inputValue } = React.useContext(SearchContext)
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)


    const [currentPage, setCurrentPage] = React.useState(1)

    const onClickCategory = (id) => { dispatch(setCategoryId(id)) }


    React.useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProperty.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = inputValue ? `&search=${inputValue}` : ''

        fetch(`https://63ce4aabd2e8c29a9bd3c476.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => res.json())
            .then(json => {
                setItems(json);
                setIsLoading(false)
            });
        window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, inputValue, currentPage])

    const skeletons = [...new Array(6)].map((_, i) => < Skeleton key={i} />);
    const pizzas = items
        .filter((pizza) => {
            if (pizza.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return true;
            }
            return false
        })
        .map((pizza) => < PizzaBlock {...pizza} key={pizza.id} />);

    return (
        <>

            <div className="content__top">
                <Categories category={categoryId} onClickCategory={onClickCategory} />
                <Sort />
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
