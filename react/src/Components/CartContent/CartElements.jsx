import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";
import CartItemCounter from "./CartItemCounter";
import "./CartElements.css";

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext);
console.log(cart)
    const deleteProduct = (id) => {
        const foundId = cart.find((element)=> element.id === id);

        const newCart = cart.filter((element)=> {
            return element !== foundId;
        });

        setCart(newCart);
    };
    
    console.log(cart);
    cart.map((product)=>{
        console.log(parseInt(product.quantity) * parseInt(product.price));
    })
    
    return cart.map((product)=>{
        return (
            <div className="cartContent" key={product.id}>
                <div className="cartItem">
                    <div className="img_titel">
                        <img src={product.image} alt="product-cart"/>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="button_quantity">
                        <CartItemCounter product={product} quantity={product.quantity}/>
                        <h4>€{product.price * product.quantity}</h4>
                        <button className="cart-delete-button" onClick={() => deleteProduct(product.id)}>X</button>
                    </div>
                </div>
            </div>
        );
    });
 };

 export default CartElements;


  
