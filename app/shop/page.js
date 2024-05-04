"use client"
// my components
import ProductCard from "../components/ProductCard";
// data json
import instrumentsData from "../data/instrumentsData.json";
import accessoriesData from "../data/accessoriesData.json";
// material components
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
// custom styles
import './page.css';


export default function Page() {
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>SHOP</h1>
        </div>
        

        <div className="section-holder">
          <div className="regrouper">
            <h2 className="group-title">Musical Instruments</h2>
            <p className="group-subtitle">Explore our Music Instruments</p>          
            <Grid container spacing={2} padding={2}>
              {instrumentsData.instruments.map((product) => (             
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <ProductCard key={product.id} product={product} />
                  </Grid>
              ))}
            </Grid>
          </div>          
        </div>

        <div className="section-holder">
          <div className="regrouper">
            <h2 className="group-title">Musical Accessories</h2>
            <p className="group-subtitle">Explore our Music Accessories</p>
            <Grid container spacing={2} padding={2}>
              {accessoriesData.accessories.map((product) => (            
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <ProductCard key={product.id} product={product} />
                  </Grid>
              ))}
            </Grid>
          </div>  
        </div>      
      </div>
    </>    
  );
}
