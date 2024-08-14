// import mongoose from "mongoose";
import React from "react";
// import Price from "./Price"; 
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import { Card } from 'react-bootstrap';



function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Image variant="top" src={Image} width='100'/>
      <Card.Body>
        <Name>Card Title</Name>
        <Description>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Description>
      </Card.Body>
    </Card>
  );
}

export default App;