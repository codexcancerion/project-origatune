"use client"
// my components
import { useCart } from '../../context/CartContext';
import CartProductCard from "../components/CartProductCard";
// data json
// material components
import { Grid, Button, Box } from '@mui/material';
// custom styles
import './page.css';
import CartTable from './CartTable';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import {Breadcrumbs} from '@mui/material';

export default function Page() {  
  const { items, totalItems, totalPrice } = useCart();
  const { userData, userLoggedIn } = useUser();
  
  console.log(userData);
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>CART</h1>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/cart/"
                aria-current="page"
              >
                Cart
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="section-holder">
          <div className="regrouper">
            <h2 className="group-title">Cart Summary</h2>
            <p className="group-subtitle"></p>   
            <p>Total Items: <strong>{totalItems}</strong></p>
            <p>Total Price: <strong>{totalPrice.toFixed(2)}</strong></p>
          </div>
            
          <div className="cart-table-holder">
            <div className="regrouper">
                <CartTable />
            </div>

            <div className='regrouper'>                 
              <Grid container spacing={2} paddingX={10}>
                <Grid item lg={4} md={4} sm={12}>
                  <h2 className="group-title"></h2>
                  <p className="group-subtitle"></p>  
                    <Link href={'/cart/payment/'}>
                      <Button 
                        type='submit'
                        variant='contained'
                        fullWidth
                        >
                          Checkout
                      </Button>
                    </Link>
                </Grid>
              </Grid>
            </div>

          </div>          
        </div>
      </div>
    </>    
  );
}
