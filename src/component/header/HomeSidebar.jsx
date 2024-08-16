import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Header from '../header/index';
import CategoryFilter from './product/CategoryFilter ';
import ProductList from './product/ProductList';
import { products } from '../../DataProduct/productDb';

const HomeSidebar = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('');
 
   // Extract unique categories from the product list
   const categories = [...new Set(products.map(product => product.category))];
 
   const handleSearch = (term) => {
     setSearchTerm(term);
   };
 
   const handleCategoryChange = (event) => {
     setSelectedCategory(event.target.value);
   };
 
  return (
   
   <Box>
      <Header onSearch={handleSearch} />
      <Grid container spacing={2} sx={{ padding: '2rem' }}>
        <Grid item xs={12} sm={3} md={2}>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categories={categories}
          />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeSidebar
