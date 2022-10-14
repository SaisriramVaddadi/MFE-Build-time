import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, AppBar } from "@mui/material";
import ProductCatalog from "./ProductsCatalog";
import { Route, BrowserRouter, Switch } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "white",
          padding: '1rem',
          boxShadow: "0px 5px 5px 2px rgba(0,0,0,0.17)"
        }}
      >
        <Link to="/">
          <Typography variant="h4">FooBar.com</Typography>
        </Link>
        <Link to="/cart">
          <Button variant="contained" color="primary">
            Go to Cart
          </Button>
        </Link>
      </header>
      <hr />
      <Switch>
        <Route path="/" component={ProductCatalog} />
      </Switch>

      <hr />

      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </BrowserRouter>
  );
};
