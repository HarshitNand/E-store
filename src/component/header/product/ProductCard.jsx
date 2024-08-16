import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
//this product card component
const ProductCard = ({ product }) => {
  return (
   
       <Card sx={{ maxWidth: 345, margin: '1rem', borderRadius: '8px' }}>
         {/* this image section of card */}
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
             {/* this image section of discription and price part */}
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }}>
                    {product.price}
                </Typography>
            </CardContent>
        </Card>
   
  )
}

export default ProductCard
