import React from "react";
import { Card, Nav } from "react-bootstrap";
import { AlbumType } from "../types/album";
import { NavLink, useParams } from "react-router-dom";

const Album = ({ album }: { album: AlbumType }) => {
  const params = useParams();
  return (
    <Nav.Link as={NavLink} to={`/users/${params.userId}/albums/${album.id}`}>
      <Card>
        <Card.Header>{album.title}</Card.Header>
        <Card.Body>
          {/* <Link to={"/users/" + post.id}>Go User</Link> */}
        </Card.Body>
      </Card>
    </Nav.Link>
  );
};

export default Album;
