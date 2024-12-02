import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <CartProvider>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </CartProvider>
);
