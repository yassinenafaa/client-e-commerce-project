import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Profile.css";
const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile">
      <Card className="profile-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar-thumbnail.png"
        />
        <Card.Body>
          <Card.Title>{user && user.name}</Card.Title>
          <Card.Text>{user && user.email}</Card.Text>
          <Button variant="primary">message</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
