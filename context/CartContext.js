"use client"
import React, { createContext, useContext, useReducer } from 'react';

// Create the context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
};

// Cart reducer to handle actions
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            // Check if the item is already in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Increase the quantity if the item already exists
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price
                };
            } else {
                // Add the new item to the cart
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price
                };
            }
        case 'REMOVE_ITEM':
            const itemToRemove = state.items.find(item => item.id === action.payload.id);
            if (itemToRemove.quantity > 1) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.payload.price
                };
            } else {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id),
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.payload.price
                };
            }
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
}

// Cart Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = item => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItem = item => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{ ...state, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
