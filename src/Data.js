import React from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 function Data(props)
{
    
    return(
    
    <div>    
       
         
        <div className="box">

            <div className="heading1">
            <Row className="heading2">
            <Col>
        {props.ids}. <div style={{display:(props.qcount<4)?"inline":"none"}}>QUESTION</div>
            </Col>
            </Row>
            <Row className="question">
            <Col>
            {props.question}
        </Col>
        </Row>
        <Row className="buttonclass">
            <Col>
            {props.option.map(option=>(<Button variant="outline-success" active={false} block onClick={(props.qcount<4)?()=>props.selected(option):()=>props.finished()}>{option}</Button>))}        
            </Col>
            
        </Row>
        </div>
        </div>
        </div>
    

    )
}
export default Data;
