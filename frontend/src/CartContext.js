import React, { useState, createContext, useContext } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addCart = async (product, qty) =>{
    const temp = {product: product, qty:qty}
    setCart([...cart,temp])
    setTotalCost(totalCost+(temp.product.cost*temp.qty));
  }
  const emptyCart =()=>{
    setCart([])
    setTotalCost(0)
  }
  return (
    <CartContext.Provider value={{ cart, totalCost, addCart, emptyCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };