import React from "react";
import './AddToCart.css';
// next
// my components
import { useCart } from '../../context/CartContext';
// material ui


const AddToCart = ({ product }) => {   
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product);
    };
  return (    
            <button className="btn btn-add-to-cart"  onClick={handleAddToCart}>Add to Cart</button>
  );
};
export default AddToCart;