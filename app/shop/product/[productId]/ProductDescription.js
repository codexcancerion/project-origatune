import React from "react";
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { Grid } from "@mui/material";
import { useCart } from '../../../../context/CartContext';
import AddToCart from "@/app/components/AddToCart";
import './ProductDescription.css';


const ProductDescription = ({ product }) => {  
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product);
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
                <AddToCart product={product}></AddToCart>
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