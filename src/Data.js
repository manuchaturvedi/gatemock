import React from 'react';
import "./App.css";
import Timer from './Timer.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 function Data(props)
{
    
    return(
    
    <div>    
       <div className="bar">
           
           <div className="endbutton">
           <Button onClick={()=>props.finished()}>End quiz</Button>
           </div>
           <div className="timer"><Timer/></div>
           
       </div>
         
        <div className="box">

            <div className="heading1">
            <Row className="heading2">
            <Col className="questionstyle">
        {props.ids}. <div  style={{display:(props.qcount<15)?"inline":"none"}}>QUESTION</div>
            </Col>
            </Row>
            <Row className="question">
            <Col>
            {props.question.split('\n').map((item, key) => {
  return <React.Fragment key={key}>{item}<br/></React.Fragment>
})}
            
        </Col>
        </Row>
        <Row className="buttonclass">
            <Col>
            <>
  <style type="text/css">
    {`
    .btn-flat {
        background: #fff;
        color: green;
        border: 2px solid #fff;
        border-radius: 6px;
        padding: 5px 10px;
        text-transform: uppercase;
        margin-bottom:15px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19);   
    }
    .btn-flat:hover{
        background:#70ff2e;
        border:2px solid #70ff2e;
        color:white;
        transform: scale(1.02);
    }
    

   
    `}
  </style>
            {props.option.map(option=>(<Button variant="flat" active={false}  block onClick={(props.qcount<15)?()=>props.selected(option):()=>props.finished()}>{option}</Button>))}        
            
            </>
            </Col>
            
        </Row>
        </div>
        </div>
        </div>
    

    )
}
export default Data;
