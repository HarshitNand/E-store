import React, { useState } from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login-Form/LoginF';
import Profiles from './page/profile page/Profiles';
import Header from './component/header/index.jsx';

import { CssBaseline } from '@mui/material';
// import ProductList from './component/header/product/ProductList.jsx';
// import { products } from './DataProduct/productDb.js';
import HomeSidebar from './component/header/HomeSidebar.jsx'


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from the product list
  // const categories = [...new Set(products.map(product => product.category))];

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    // const handleCategoryChange = (event) => {
    //   setSelectedCategory(event.target.value);
    // };

  return (
    < BrowserRouter>
       <CssBaseline />
    <Header onSearch={handleSearch} />
 
    
    <Routes>
    
    <Route path="/" element={ <HomeSidebar searchTerm={searchTerm} selectedCategory={selectedCategory}/>} />
    <Route path="/Login" element={ <Login />} />
    <Route path="/profile" element={ <Profiles/>} />
    
      
    </Routes>
    
    
  </BrowserRouter>
   )
}

export default App

