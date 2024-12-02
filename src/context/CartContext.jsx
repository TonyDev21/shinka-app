import { createContext, useReducer, useEffect } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [], // Leer el carrito desde localStorage
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };