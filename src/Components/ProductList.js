import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/product";
import ProductCard from "./ProductCard";
import "../Components/ProductList.css";
const ProductList = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const load = useSelector((state) => state.productReducer.load);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="product-list">
      {load ? (
        <h2>loadinnnnnngg....</h2>
      ) : (
        listProducts.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;
