import React, { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("products")) || [];
    console.log(localStorage.getItem("products"));
    setProducts(productList);
  }, []);

  const removeFromCart = (product) => {
    const currentAddedProducts =
      JSON.parse(localStorage.getItem("products")) || [];
    const newProducts = currentAddedProducts.filter((p) => p.id !== product.id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <React.Fragment>
      <main style={{ marginTop: "7rem", padding: "0.5rem 1rem" }}>
          {products.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                rowGap: "3rem",
                columnGap: "2rem",
              }}
            >
              {products.map((product, index) => (
                <div
                  style={{
                    border: "1px solid lightgray",
                    padding: "1rem",
                    borderRadius: "5px",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <img height="120" src={product.image} alt={product.title} />
                    <div>
                      <h6>{product.title}</h6>
                      <p style={{ fontSize: "1rem", wordWrap: "break-word" }}>
                        {product.description}
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          border: "none",
                          padding: "0.5rem",
                          background: "steelblue",
                          color: "white",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3>Cart is Empty </h3>
          )}
      </main>
    </React.Fragment>
  );
}
