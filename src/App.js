import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Home from './components/pages/Home';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/pages/Footer';



const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;