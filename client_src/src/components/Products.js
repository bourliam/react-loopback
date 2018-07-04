import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  getProducts() {
    axios
      .get("http://localhost:3000/api/Products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    const productItems = this.state.products.map((product, i) => {
      return <ProductItem item={product} key={product.id} />;
    });
    return (
      <div>
        <h1>Products</h1>
        <ul className="collection">{productItems}</ul>
      </div>
    );
  }
}
export default Products;
