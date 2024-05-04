"use client"
// my components
import { useCart } from '../../context/CartContext';
import CartProductCard from "../components/CartProductCard";
// data json
// material components
// custom styles
import './page.css';
import CartTable from './CartTable';

export default function Page() {  
  const { items, totalItems, totalPrice } = useCart();
  return (
    <>
      <div className="page-container">
        <div className="section-holder">
          <h1>CART</h1>
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
                {/* <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                      {items.map((item) => (  
                          <CartProductCard item={item}></CartProductCard>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>{totalItems}</th>
                      <th>$ {totalPrice.toFixed(2)}</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>  */}

                <CartTable />
            </div>

          </div>          
        </div>
      </div>
    </>    
  );
}
