import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Errors from "./Pages/Errors";
import NavBar from "./Components/NavBar";
import { useDispatch } from "react-redux";
import { current } from "./JS/Actions/user";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import Edit from "./Pages/Edit";
import Footer from "./Components/Footer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
