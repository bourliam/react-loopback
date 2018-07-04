import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import AddProduct from "./AddProduct";
import BuyProduct from "./BuyProduct";

const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/about" component={About} />
      <Route exact path="/product/add" component={AddProduct} />
      <Route exact path="/product/buy/:id" component={BuyProduct} />
      <Route exact path="/product/:id" component={ProductDetails} />
    </Switch>
  </main>
);

export default Router;
