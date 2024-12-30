import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../JS/Actions/user";
import "./Login.css";
const Register = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
    navigate("/profile");
  };
  return (
    <div className="login-container ">
      <h2>Register page</h2>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleChange}
      />
      <Form.Label>Email </Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name="email"
        onChange={handleChange}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter password"
        name="password"
        onChange={handleChange}
      />
      <Form.Label>Phone</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter phone"
        name="phone"
        onChange={handleChange}
      />
      <Button
        className="btn-login"
        variant="primary"
        type="submit"
        onClick={handleUser}
      >
        Submit
      </Button>
    </div>
  );
};

export default Register;
