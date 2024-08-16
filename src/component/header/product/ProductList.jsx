import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../../../DataProduct/productDb';

const ProductList = ({  searchTerm, selectedCategory  }) => {
   const filteredProducts = products.filter(product =>
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );

    return (
        <Container sx={{ padding: '2rem 0',marginTop:'20px' }}>
            <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}
            >
                Our Products
            </Typography>
            <Grid container spacing={3}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" component="p" sx={{ textAlign: 'center', width: '100%' }}>
                        No products found.
                    </Typography>
                )}
            </Grid>
        </Container>
    );
};

export default ProductList;
