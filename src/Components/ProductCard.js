import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../JS/Actions/product";
import "../Components/ProductCard.css";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="card-container">
      <Card style={{ width: "17rem" }}>
        <Card.Img
          variant="top"
          src="https://emc2rrspvpp.exactdn.com/wp-content/uploads/2023/03/Centric-v7.6_Apparel-banner_1248x800px.jpg?lossy=1&quality=92&webp=92&ssl=1"
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          {user && user._id === product.id_user ? (
            <Button
              variant="primary"
              onClick={() => navigate(`/edit/${product._id}`)}
            >
              Edit
            </Button>
          ) : null}
          {user && user._id === product.id_user ? (
            <Button
              variant="primary"
              onClick={() => dispatch(deleteProduct(product._id))}
            >
              Delete
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
