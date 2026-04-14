import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
        : { ...item, qty: 1 }
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const decreaseQty = (id) => {
    setCart(prev => {
      const updated = { ...prev };

      if (!updated[id]) return prev;

      if (updated[id].qty === 1) {
        delete updated[id];
      } else {
        updated[id] = { ...updated[id], qty: updated[id].qty - 1 };
      }

      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const increaseQty = (item) => {
    setCart(prev => {
      if (!prev[item.id]) return prev;

      return {
        ...prev,
        [item.id]: {
          ...prev[item.id],
          qty: prev[item.id].qty + 1
        }
      };
    });
  };

  const placeOrder = (details) => {
    const orderItems = Object.values(cart);

    if (orderItems.length === 0) return;

    setOrders(prev => [
      ...prev,
      {
        id: Date.now(),
        items: orderItems,
        details
      }
    ]);

    setCart({});
  };

  return (
    <CartContext.Provider value={{
      cart,
      orders,
      addToCart,
      increaseQty,
      removeFromCart,
      decreaseQty,
      clearCart,
      placeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};
