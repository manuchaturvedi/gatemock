import React from 'react';
import "./App.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';

function End(props){
  function refreshPage() {
    window.location.reload(false);
  }
 return(  
     <Jumbotron>
      <div className="ending">
    <h1>Congratulations </h1>
    <div className="point">
    <DoneIcon style={{ color:"green" }}/> {props.points} correct  
    <CloseIcon style={{ color:"red" }}/> {4-props.points} wrong 
    </div>
    <p>Points scored are:</p>
    <h2>{props.points}</h2>
    <ReplayIcon style={{  cursor:"grab"}} onClick={refreshPage}/> Replay
     </div>
     
    </Jumbotron> 
 )}
export default End;