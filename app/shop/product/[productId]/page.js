"use client"
// my components
import ProductDescription from "./ProductDescription";
// data json
import instrumentsData from "../../../data/instrumentsData.json";
import accessoriesData from "../../../data/accessoriesData.json";
// material components
// custom styles
import './page.css';
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";


export default function Page({ params }) {
  const productId = params.productId; // Access the dynamic part of the URL

  // Function to find the product based on productId
  var product = {};
  const findProduct = (id) => {
    let foundProduct = false;
    if(!foundProduct){
      instrumentsData.instruments.forEach(element => {
        if (element.id === id) {
          foundProduct = true;
          product = element;
        }
      });
    }
    
    if (!foundProduct) {
      accessoriesData.accessories.forEach(element => {
        if (element.id === id) {
          foundProduct = true;
          product = element;
        }
      });
    }
  };
  findProduct(productId);
  console.log(productId);
  console.log(product);

  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>{product.category}</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/shop/"
              >
                Shop
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href={"/shop/product/"+productId}
                aria-current="page"
              >
                {product.name}
              </Link>
            </Breadcrumbs>
          </div>
        </div>        

        <div className="section-holder">
          <div className="regrouper">
            <ProductDescription product={product}></ProductDescription>
          </div>
        </div>  
      </div>
    </>    
  );
}
