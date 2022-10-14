export * from './ProductList';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './ProductList';


const root = ReactDOM.createRoot(document.getElementById("cart-dev-root"));

root.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
);
