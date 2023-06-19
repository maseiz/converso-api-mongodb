import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';


const CartItemCounter = ({ product, quantity }) => {
  const { cart, setCart, buyProduct } = useContext (DataContext);

  const decrease = ()=> {
    const productrepeat = cart.find((item)=> item.id === product.id) 

    productrepeat.quantity !== 1 && setCart(cart.map((item)=> item.id === product.id ? {...product, quantity: productrepeat.quantity - 1} : item))
  }

  return (
    <>
      <button className='counter-button' onClick={decrease}>-</button>
      <p>{quantity}</p>
      <button className='counter-button' onClick={()=> buyProduct(product)}>+</button>
    </>
  )
}

export default CartItemCounter;