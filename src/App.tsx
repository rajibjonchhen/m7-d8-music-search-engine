import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import MyNavbar from './components/MyNavbar';

function App() {
  const[search, setSearch] = useState()
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DetailPage' element={<DetailPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
