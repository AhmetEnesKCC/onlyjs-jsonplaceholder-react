import React from "react";
import { UserType } from "../types/user";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ user }: { user: UserType }) => {
  return (
    <Card>
      <Card.Header>{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to={"/users/" + user.id}>Go User</Link>
      </Card.Body>
    </Card>
  );
};

export default User;
