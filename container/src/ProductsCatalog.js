import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";

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
    const currentAddedProducts = JSON.parse(localStorage.getItem('products')) || [];
    console.log(currentAddedProducts);
    localStorage.setItem('products', JSON.stringify([...currentAddedProducts, product]));
  }

  return (
    <React.Fragment>
      <main style={{marginTop: "6rem"}}>
        <Container className="cardGrid">
          {products.length > 0 ? (
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card sx={{height: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={product.image}
                      title={product.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h3">
                        {product.title}
                      </Typography>
                      <Typography sx={{fontSize: '1rem'}}>{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={()=>addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <h3>No Products available</h3>
          )}
        </Container>
      </main>
    </React.Fragment>
  );
}
