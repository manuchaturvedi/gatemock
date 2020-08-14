import React from 'react';
import "./App.css";
import Jumbotron from 'react-bootstrap/Jumbotron';

function End(props){
 return(  
     <Jumbotron>
      <div className="ending">
    <h1>Game Over </h1>
    <p>Points scored are:</p>
    <h2>{props.points}</h2>
     </div>
    </Jumbotron> 
 )}
export default End;