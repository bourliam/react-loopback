import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
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

  onDelete() {
    let id = this.state.details.id;
    axios
      .delete(`http://localhost:3000/api/products/${id}?access_token=s3cr3t`)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">
            Quantity left: {this.state.details.quantityLeft}
          </li>
          <li className="collection-item">Price: {this.state.details.price}</li>
        </ul>
        <Link className="btn" to={`/product/buy/${this.state.details.id}`}>
          Buy
        </Link>
        <button className="btn red right" onClick={this.onDelete.bind(this)}>
          Delete
        </button>
      </div>
    );
  }
}

export default ProductDetails;
