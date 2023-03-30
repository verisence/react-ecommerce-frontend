import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // Add our data to the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  // reset qty
  const resetQty = () => {
    setQty((prevQty) => prevQty - prevQty + 1);
  };

  // increase qty
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // decr qty
  const decreaseQty = () => {
    qty > 1 && setQty((prevQty) => prevQty - 1);
  };

  // add prod to cart
  const onAdd = (product, quantity) => {
    // check if prod is already in cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  // remove item
  const onRemove = (product) => {
    // check if prod is already in cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        resetQty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
