import React from "react";
import Card from "react-bootstrap/Card";
import LandingImg from "../images/Landing2.jpg";

// Adding landing page to home page
function Landing() {
  return (
    <Card className="bg-dark text-black">
      <Card.Img src={LandingImg} alt="Card image" height="950px" width="100%" />
      <Card.ImgOverlay>
        <div className="landingDiv">
          <Card.Title className="CardTitle">Pajamas and Cream</Card.Title>
          <Card.Text>We love to bake ridiculous, extravant cakes.</Card.Text>
          <Card.Text>
            Black liquorice with rose-petal icing? Sure. Vanilla with bacon and
            eggs on top? Why the hell not.
          </Card.Text>
          <Card.Text>
            Below are some examples of the custom cakes we offer. Feel free to
            request a custom order that fufills your wildest dreams.
          </Card.Text>
          <Card.Text>Surprise us.</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
export default Landing;
