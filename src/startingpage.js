import React from 'react';
import './startingpage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Tooltip from "@material-ui/core/Tooltip";
function Startingpage(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="icon.png"/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <LaptopMacIcon/>

    <Card.Text>
      {props.disc}
    </Card.Text>
    <Tooltip
        title="Login to start test"
        placement="right"
      >
    <Button onClick={()=>props.startquiz()}
                 variant="primary" size="lg" active={false}>start</Button>          
    </Tooltip>
  </Card.Body>
  </Card>
            
        </div>
    )
}

export default Startingpage
