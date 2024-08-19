import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import orderHistory from '../../data/orderHistory.json';
import accessoriesData from '../../data/accessoriesData.json';
import instrumentsData from '../../data/instrumentsData.json';

let accessories = [];
let instruments = [];
accessories = accessoriesData.accessories;
instruments = instrumentsData.instruments;

const OrderHistory = () => {
  // Define columns for the DataGrid
  const columns = [    
    { field: 'orderId', headerName: 'Order ID', width: 100 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'time', headerName: 'Time', width: 100 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'shippingAddress', headerName: 'Shipping Address', width: 300 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 150 },
    { field: 'totalPrice', headerName: 'Total Price', width: 150 },
  ];

  // Map order history to rows for the DataGrid
  const rows = orderHistory.orders.map((order, index) => {
    let found = false;
    let product = accessories.find(item => {
      if(item.id === order.productId){
        found = true;
        return item;
      }
    });
    found ? false : product = instruments.find(item => item.id === order.productId);
    
    return {
    id: index + 1,
    orderId: order.orderId,
    date: order.date,
    time: order.time,
    productName: product ? product.name : 'Unknown',
    quantity: order.quantity,
    shippingAddress: `${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state}, ${order.shippingAddress.zipCode}, ${order.shippingAddress.country}`,
    paymentMethod: order.paymentMethod,
    totalPrice: order.totalPrice,
  }});

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default OrderHistory;
