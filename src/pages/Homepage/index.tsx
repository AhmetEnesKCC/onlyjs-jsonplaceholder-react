import React from "react";
import { useLoaderData } from "react-router-dom";
import { UserType } from "../../types/user";
import { Col, Row } from "react-bootstrap";
import User from "../../components/User";

const HomePage = () => {
  const pageData = useLoaderData() as UserType[];
  return (
    <Row className="row-gap-2 p-2">
      {pageData.map((user) => (
        <Col sm={4}>
          <User user={user} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
