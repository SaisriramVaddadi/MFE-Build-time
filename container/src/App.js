import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import ProductCatalog from "./ProductsCatalog";
import Cart from "cart-mfe";
import { Route, BrowserRouter, Routes } from "react-router-dom";


const CartMFE = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Cart/>
  </Suspense>
)

export default () => {
  return (
    <BrowserRouter>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "white",
          padding: "0.5rem 1rem",
          boxShadow: "0px 5px 5px 2px rgba(0,0,0,0.17)",
        }}
      >
        <Link to="/">
          <h4 variant="h4">Amacart</h4>
        </Link>
        <Link to="/cart">
          <button
            style={{
              border: "none",
              padding: "0.5rem",
              background: "steelblue",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go to Cart
          </button>
        </Link>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<ProductCatalog />} />
        <Route path="/cart" element={<CartMFE />} />
      </Routes>

      <hr />
    </BrowserRouter>
  );
};
