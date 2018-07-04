import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
      qtyToBuy: ""
    };
  }

  getProduct() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/products/${id}`)
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getProduct();
  }

  buyProduct(order) {
    let id = this.state.details.id;
    axios
      .request({
        method: "post",
        url: `http://localhost:3000/api/products/${id}/buy`,
        data: order
      })
      .then(response => {
        this.props.history.push(`/product/${this.state.details.id}`);
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    let qty = parseInt(this.refs.quantity.value, 10);
    const order = {
      quantity: qty
    };
    this.buyProduct(order);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to={`/product/${this.state.details.id}`}>
          Back
        </Link>
        <h1>Buy: {this.state.details.name}</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              required
              onChange={e => this.setState({ qtyToBuy: e.target.value })}
              type="number"
              name="quantity"
              ref="quantity"
            />
            <label htmlFor="name">Quantity</label>
          </div>
          <div className="input-field">
            <input disabled type="number" name="price" ref="price" />
            <label htmlFor="price">Price: {this.state.details.price}€</label>
          </div>
          <div>
            {this.state.qtyToBuy !== "" && (
              <p>
                Buy {this.state.qtyToBuy} for{" "}
                {this.state.qtyToBuy * this.state.details.price}€
              </p>
            )}
          </div>
          <input type="submit" className="btn" value="Buy" />
        </form>
      </div>
    );
  }
}

export default BuyProduct;
