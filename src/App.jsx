import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RestList from './components/RestList';
import Rest from './components/Rest';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/restaurants' element={<RestList />} ></Route>
            <Route path='/restaurant/:id' element={<Rest/>} ></Route>
            <Route path='/restaurant/:*' element={<Rest/>} ></Route>
        </Routes>
        </BrowserRouter>
    );
};

export default App;