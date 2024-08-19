import React from "react";
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Link from "next/link";
import { Grid, Box, Alert } from "@mui/material";
import { useCart } from '../../../../context/CartContext';
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import './ProductDescription.css';


const ProductDescription = ({ product }) => {  
    const { addItem } = useCart();
    const [addedToCart, setAddedToCart] = useState(false); 
    const {userLoggedIn} = useUser();

    const handleAddToCart = () => {
        addItem(product);
        setAddedToCart(true);
    };
    var name = product.name;
    var category = product.category;
    var price = product.price;
    var description = product.description;
    var stock = product.stock;
    var rating = product.rating;
  return (
    <>
    <div className="product-description">
        <Grid container spacing={2} padding={2}>          
            <Grid item xs={6}>
                <div className="product-info">
                    <h1 className="group-title">{name}</h1>
                    <p className="group-subtitle"></p>
                    <div className="product-ratings">
                        <Rating className="product-rating" value={rating} precision={0.5} readOnly />
                    </div>            
                    <p className="description">{description}</p>
                    <p className="price">$ {price}</p>
                </div>
                <div className="btn-holder">

                {userLoggedIn ? (
                        <button className="btn btn-add-to-cart"  onClick={handleAddToCart}>Add to Cart</button>
                    ) : (
                        <Link href={`/user/login/`}>
                            <button className="btn btn-add-to-cart">Login to add to cart</button>
                        </Link>
                    )}
                <Box hidden={!addedToCart} marginX={1}>
                    <Alert severity="success">Added to cart</Alert>
                </Box>
            </div>
            </Grid>
            <Grid item xs={6}>
                <div className="image-holder">
                    <Image
                        src={"/img/" +product.id+ ".jpg"}
                        width={500}
                        height={300}
                        alt={"Fender Stratocaster"}
                        className= "product-image"
                    />
                </div>
            </Grid>
        </Grid>
    </div>
    </>
  );
};
export default ProductDescription;