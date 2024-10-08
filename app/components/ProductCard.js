"use client"
import React from "react";
import './ProductCard.css';
// next
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
// my components
import { useCart } from '../../context/CartContext';
// material ui
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { useUser } from "@/context/UserContext";


const ProductCard = ({ product }) => {  
    const {userLoggedIn} = useUser();
    const { cartButtonHovered, setCartButtonHovered } = useState(false); 
    const { addItem } = useCart();
    const [addedToCart, setAddedToCart] = useState(false); 

    const handleAddToCart = () => {
        addItem(product);
        setAddedToCart(true);
    };
    const rating = product.rating;
    // Ensure the file type is same to all images
    // const imgLink = "/product-img/" + product.id +".jpeg";
    const imgLink = "/img/" + product.id +".jpg";
  return (    
    <div className="product-card">
        <div className="image-holder">
            <Image
                src={imgLink}
                width={1000}
                height={1000}
                alt={product.name}
                className= "product-image"
            />
        </div>
        
        <div className="product-info">
            <h5 className="product-name">{product.name}</h5>
            <p className="product-category">{product.category}</p>
            <p className="product-price">$ { product.price}</p>
            <div className="product-ratings">
                <Rating className="product-rating" value={rating} precision={0.5} readOnly />
            </div>            
            <p className="product-price">Rated { product.rating}</p>
        </div>
        {/* <p className="product-description">{product.description}</p>             */}
        
        <Box hidden={!addedToCart} marginX={1}>
            <Alert severity="success">Added to cart</Alert>
        </Box>
        <div className="btn-holder">
            {userLoggedIn ? (
                <button className="btn btn-add-to-cart"  onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                <Link href={`/user/login/`}>
                    <button className="btn btn-add-to-cart">Login to add to cart</button>
                </Link>
            )}
                
                
                <Link href={`/shop/product/${product.id}`}>
                    <button className="btn btn-view-details">View Details</button>
                </Link>
                
        </div>
    </div>
  );
};
export default ProductCard;