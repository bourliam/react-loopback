import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  addProduct(newProduct) {
    axios
      .request({
        method: "post",
        url: "https://boulangerie-maxou.herokuapp.com/api/products?access_token=s3cr3t",
        data: newProduct
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const newProduct = {
      name: this.refs.name.value,
      quantityLeft: this.refs.quantity.value,
      price: this.refs.price.value
    };
    this.addProduct(newProduct);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>Add a new product</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="number" name="price" ref="price" />
            <label htmlFor="name">Price</label>
          </div>
          <div className="input-field">
            <input type="number" name="quantity" ref="quantity" />
            <label htmlFor="name">Quantity</label>
          </div>
          <input type="submit" className="btn" value="Save" />
        </form>
      </div>
    );
  }
}

export default AddProduct;
