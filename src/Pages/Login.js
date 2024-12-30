import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/user";
import "./Login.css";
const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/profile");
  };
  return (
    <div className="login-container">
      <h2 className="login-title">Login page </h2>
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

export default Login;
