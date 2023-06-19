import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DetalleProducto from '../../Assets/12.jpeg';
import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';

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

const ProductDetail = (id) => {
  const [selectedSize, setSelectedSize] = React.useState('');
 

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (

    <ProductDetailWrapper>
     <ProductImage src={id.id.image} alt="Producto"/>
      <ProductContent>
        <Typography variant="h4" gutterBottom>
        {id.id.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Descripción del producto.
        </Typography>
        <ButtonWrapper>
          <Select
            value={selectedSize}
            onChange={handleSizeChange}
            displayEmpty
            sx={{ marginBottom: '16px' }}
          >
            <MenuItem value="" disabled>
              Seleciona tu talla
            </MenuItem>
            <MenuItem value="36">36</MenuItem>
            <MenuItem value="37">37</MenuItem>
            <MenuItem value="38">38</MenuItem>
            <MenuItem value="39">39</MenuItem>
            <MenuItem value="40">40</MenuItem>
          </Select>
          <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff' }}>
            Agregar al carrito
          </Button>
        </ButtonWrapper>
      </ProductContent>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
