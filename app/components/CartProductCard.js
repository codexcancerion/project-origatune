
import './CartProductCard.css';
// next
import Image from 'next/image';
import Link from "next/link";
// my components
import { useCart, addItem } from '../../context/CartContext';
// material ui
import Rating from '@mui/material/Rating';
import { useState } from 'react';


const CartProductCard = ({ item  }) => {   
    const { addItem, removeItem } = useCart();
    
    const handleIncrease = () => {
        addItem(item);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            removeItem({ ...item, decreaseOnly: true });
        } else {
            removeItem(item);
        }
    };
    const pageLink = '/shop/product/'+item.id;
    const imgLink = "/img/" + item.id +".jpg";
  return (    
    <>
    <tr>
        <td className="cart-item-element">
            <Link href={pageLink}>
                <div className="item-name-holder">
                    <div className="product-image">
                        <Image
                            src={imgLink}
                            alt={item.name}
                            width={50}
                            height={50}
                            objectFit="contain"
                        />
                    </div>
                    <h5 className="cart-item-title">{item.name}</h5>
                </div>
            </Link>
        </td>
        <td className="cart-item-element">
            <p>$ {item.price.toFixed(2)}</p>
        </td>
        <td className="cart-item-element">
            <div className="product-actions">
                <button onClick={handleDecrease} disabled={item.quantity === 1} id="decreaseButton">-</button>
                <span>{item.quantity}</span>
                <button onClick={handleIncrease} id="increaseButton">+</button>
            </div>
        </td>
        <td className="cart-item-element">
            <p>$ {item.quantity*item.price}</p>            
        </td>
        <td className="cart-item-element more">
            <button onClick={() => removeItem(item)} className="remove-button">Remove</button>
        </td>
    </tr>
    </>
  );
};
export default CartProductCard;