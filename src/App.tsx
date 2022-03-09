import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DetailPage' element={<DetailPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
