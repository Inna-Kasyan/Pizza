import './scss/app.scss'
import React from 'react'
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, test } from './redux/slices/filterSlice';

export const SearchContext = React.createContext();

function App() {

  const [inputValue, setInputValue] = React.useState('')

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(test())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
    // <div className="wrapper">
    //   < SearchContext.Provider value={{ inputValue, setInputValue }} >
    //     <Header />
    //     <div className="content">
    //       <div className="container">
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //           <Route path='*' element={<NotFound />} />
    //           <Route path='/cart' element={< Cart />} />
    //         </Routes>



    //       </div>
    //     </div>
    //   </SearchContext.Provider>
    // </div>
  );
}

export default App;
