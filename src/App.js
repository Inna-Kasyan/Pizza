import './scss/app.scss'
import React from 'react'
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound'


function App() {

  const [inputValue, setInputValue] = React.useState('')


  return (
    <div className="wrapper">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home inputValue={inputValue} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={< Cart />} />
          </Routes>



        </div>
      </div>
    </div>
  );
}

export default App;
