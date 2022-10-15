import React, { useState, useEffect } from "react";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productList = await response.json();
      setProducts(productList);
    })();
  }, []);

  const addToCart = (product) => {
    const currentAddedProducts =
      JSON.parse(localStorage.getItem("products")) || [];
    console.log(currentAddedProducts);
    localStorage.setItem(
      "products",
      JSON.stringify([...currentAddedProducts, product])
    );
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
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
      </main>
    </React.Fragment>
  );
}
