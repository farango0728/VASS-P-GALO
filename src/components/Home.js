import React from "react";
import CheckoutPage from "./CheckoutPage";
import Navbar from "./Navbar";
import Products from "./Products";
import { Routes, Route, Link } from "react-router-dom";

const Home = ({carrito, addCarrito, deleteCarrito, setSesionStatus}) => {
  return (
    <div>
      <Navbar setSesionStatus={setSesionStatus}/>
      <Routes>
        <Route path="/" element={<Products addCarrito={addCarrito} />} />
        <Route
          path="/checkout-page"
          element={
            <CheckoutPage carrito={carrito} deleteCarrito={deleteCarrito} />
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
