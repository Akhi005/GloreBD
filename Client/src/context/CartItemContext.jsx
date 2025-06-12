import { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error("Failed to parse cart items:", error);
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items:", error);
    }
  }, [cartItems]); 
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      if (existingItem) {
        return prevItems.map(item =>
          item._id === product._id 
            ? { ...item, quantity: (item.quantity || 1) + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };
  
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price * (item.quantity || 1)),
    0
  );
  const calculateItemTotal = (item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity, 10);
    return price * quantity;
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        subtotal,
        calculateItemTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}