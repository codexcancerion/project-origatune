import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useCart } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartTable.css';

export default function CartTable() {
  const { items, addItem, removeItem } = useCart(); // Access cart items and actions from the cart context
  const [selectedItemId, setSelectedItemId] = React.useState(null); // Track the selected item ID

  const handleIncrement = () => {
    if (selectedItemId) {
      const selectedItem = items.find(item => item.id === selectedItemId);
      if (selectedItem) {
        addItem(selectedItem); // Call addItem from the cart context to increment quantity
      }
    }
  };

  const handleDecrement = () => {
    if (selectedItemId) {
      const selectedItem = items.find(item => item.id === selectedItemId);
      if (selectedItem && selectedItem.quantity > 1) {
        removeItem(selectedItem); // Call removeItem from the cart context to decrement quantity
      }
    }
  };

  const handleDelete = () => {
    if (selectedItemId) {
      const selectedItem = items.find(item => item.id === selectedItemId);
      if (selectedItem) {
        removeItem(selectedItem); // Call removeItem from the cart context to remove the item
      }
    }
  };
  const handleSelectionChange = (selectionModel) => {
    console.log(selectionModel);
    setSelectedItemId(selectionModel.length === 1 ? selectionModel[0] : null);
  };

    // Map cart items to rows for the DataGrid
    const rows = items.map((item, index) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price.toFixed(2),
        quantity: item.quantity,
        totalPrice: (item.price * item.quantity).toFixed(2),
    }));
    
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product name', width: 300 },
    { field: 'category', headerName: 'Category name', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 150 },
  ];

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          pageSize={5}
          onRowSelectionModelChange={handleSelectionChange} // Listen for selection changes
        />
      </div>
      <div className='control-group'>
        <h4>Edit your cart</h4>
        <button onClick={handleIncrement} className='control'>
            <div>+</div> Add
        </button>
        <button onClick={handleDecrement} className='control'>
            <div>-</div> Remove
        </button>
        <button onClick={handleDelete} className='control delete'>
            <div><DeleteIcon /></div> Delete
        </button>
      </div>
    </div>
    
  );
}
