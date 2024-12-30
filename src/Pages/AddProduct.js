import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../JS/Actions/product";
import { Link } from "react-router-dom";
import "./Login.css";
const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addProduct(newProduct));
  };
  return (
    <div className="login-container">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter description"
        name="description"
        value={newProduct.description}
        onChange={handleChange}
      />
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter price"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
      />
      <Form.Label>Stock</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter stock"
        name="stock"
        value={newProduct.stock}
        onChange={handleChange}
      />
      <Link to="/products">
        <Button
          className="btn-login"
          variant="primary"
          type="submit"
          onClick={() => add()}
          onSubmit={() => add()}
        >
          Submit
        </Button>
      </Link>
    </div>
  );
};

export default AddProduct;
