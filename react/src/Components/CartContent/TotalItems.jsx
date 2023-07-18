import React from "react";
import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';

const TotalItems = () => {
   const { cart } = useContext (DataContext);

   const itemsQuantity = cart.reduce((acc,el)=> acc + el.quantity, 0);
   return itemsQuantity;
}

export default TotalItems