import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


// Importing the needed images
import PeachImg from "../images/peachy.png";
import LemonImg from "../images/lemon-poppy.png";
import SaltedImg from "../images/salted-caramel.png";
import OrangeImg from "../images/whitechoc-orange.png";



// Creating the array for cake info
const cakes = [
    {
      id: "1",
      cake_name: "Lemon Poppyseed",
      description: "Rich white chocolate, sour lemon & poppyseed.",
      img: LemonImg
    },
    {
      id: "2",
      cake_name: "Salted Caramel",
      description: "Sticky toffee caramel, cinnamon & caramelised cashew nuts.",
      img: SaltedImg
    },
    {
      id: "3",
      cake_name: "Peachy",
      description: "Dark chocolate, cream cheese frosting & fresh peaches.",
      img: PeachImg
    },
    {
      id: "4",
      cake_name: "Spicy Orange",
      description:
        "Spicy flavours of cinnamon and cayenne pepper. Meringue frosting",
      img: OrangeImg
    }
  ];

// props from App.js
// Adding products name & description to shop
function Products() {
  const listCakes =cakes.map((cake, i) => (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={cake.img} alt="cake_img" key={cake.id} />
        <Card.Body>
          <Card.Title>{cake.cake_name}</Card.Title>
          <Card.Text>
            <small>{cake.description}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Price upon request.</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  ));
  return (
    <Container>
      <Row>{listCakes}</Row>
    </Container>
  );
}

export default Products;
