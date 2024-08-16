import React from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
//this a category section and destructer the data part in bleow for display
const CategoryFilter = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <Box sx={{ padding: '1rem', borderRight: '1px solid #ddd',marginTop:'80px' }}>
      <Typography variant="h6" gutterBottom>
        Filter by Category
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="category"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          <FormControlLabel value="" control={<Radio />} label="All Product" />
          {categories.map((category, index) => (
            <FormControlLabel 
              key={`${category}-${index}`} // Ensure a unique key
              value={category} 
              control={<Radio />} 
              label={category} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;
