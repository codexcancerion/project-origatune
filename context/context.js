"use client"
import React, { createContext, useContext, useState } from "react";

export const SelectedProductContext = createContext();
export const useSelectedProduct = () => useContext(SelectedProductContext);
export const changeSelectedProduct = (product) => {
    const selectedProduct = useContext(SelectedProductContext);
    selectedProduct.selectProduct(product);
};

export const SelectedProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const selectProduct = (value) => setProduct(value);

  return (
    <SelectedProductContext.Provider value={{ product, selectProduct }}>
      {children}
    </SelectedProductContext.Provider>
  );
};
