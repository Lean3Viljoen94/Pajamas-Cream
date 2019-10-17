import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './Profile';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Check if the user is logged in or not?
// If YES logged in, display UserGreeting.
function UserGreeting(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card.Title className="headingTitle">
            Welcome, glad you're back!
          </Card.Title>
        </Col>
        <Col>
          <Button onClick={userClick}>My Profile</Button>
        </Col>
      </Row>
    </Container>
  );
}
// Go to profile button appears
function userClick() {
  console.log("Go to my profile");
  return (
    <Router>
    <Route path="/Profile" component={Profile} />
    </Router>
  );
}

// Check if the user is logged in or not.
// If NOT logged in, display GuestGreeting.

function GuestGreeting(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card.Title className="headingTitle">
            Hey stranger, please log in.{" "}
          </Card.Title>
        </Col>
        <Col>
          <Button onClick={guestClick}>Log in</Button>
        </Col>
      </Row>
    </Container>
  );
}

// If GUEST, then display login page
function guestClick() {
  console.log("Guest log in");
  return (
    <Form className="logInForm">
      <h3>Please log in:</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" size="sm" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" size="sm" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  );
}
// Check if the user is logged in or not.
function Header(props) {
  const loggedIn = props.loggedIn;
  if (loggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Header;
