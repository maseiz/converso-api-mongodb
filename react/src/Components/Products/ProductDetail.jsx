import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../../index.css'

const ProductDetailWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
}));

const ProductImage = styled('img')({
  width: '50%',
  marginRight: '16px',
  marginBottom: '20px',
});

const ProductContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledSelect = styled(Select)({
  '& .MuiSelect-selectMenu': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const ProductDetail = (id) => {
  const [selectedSize, setSelectedSize] = React.useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <ProductDetailWrapper>
      <ProductImage src={id.id.image} alt="producto" />
       <ProductContent>
        <Typography variant="h6" gutterBottom>
          {id.id.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {id.id.style}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {id.id.price}€
          </Typography>
        <ButtonWrapper>
          <StyledSelect
            value={selectedSize}
            onChange={handleSizeChange}
            displayEmpty
            sx={{ marginBottom: '16px' }}
          >
            <MenuItem 
            value="" disabled>
             Seleciona tu talla
            
            </MenuItem>
            
            <MenuItem value="36">36</MenuItem>
            <MenuItem value="37">37</MenuItem>
            <MenuItem value="38">38</MenuItem>
            <MenuItem value="39">39</MenuItem>
            <MenuItem value="40">40</MenuItem>
            <MenuItem value="41">41</MenuItem>
            <MenuItem value="42">42</MenuItem>
            
          </StyledSelect>
          <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff' }}>
            Agregar al carrito
          </Button>
        </ButtonWrapper>
      </ProductContent>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;

