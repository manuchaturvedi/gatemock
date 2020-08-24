import React,{useState,useEffect} from 'react';
import "./App.css";
import firebaseConfig from './config/fire.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



//this style
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth:700,
  },
});










function End(props){
  const db=firebaseConfig.firestore();
  const [disabled,setDisable]=useState(false)
  const [pointing,setPoints]= useState([12,122])
  const [input,setInput]=useState([])
  function refreshPage() {
    window.location.reload(false);
  }


  const classes = useStyles();


  useEffect(()=>{
    db.collection('points').orderBy('pointing','desc').onSnapshot(Snapshot=>{
     const newdata=Snapshot.docs.map( doc=> ({id:doc.id,...doc.data()}))
    
     setInput([...newdata]);
     console.log(newdata)
    })
    },[]);






  var user = firebase.auth().currentUser;
  var email=user.email;
  const {points}=props;


 const score=(event)=>{
  event.preventDefault();
  
  db.collection('points').add({
    pointing:points,
    user:email,
    attempt:true,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  setPoints([...pointing,points,email]);
    console.log(user.email)

    
  setDisable({disabled: true});
  

  }

 return(  
     <Jumbotron>
      <div className="ending">
    <h1>Congratulations </h1>
    <div className="point">
    <DoneIcon style={{ color:"green" }}/> {props.points} correct  
    <CloseIcon style={{ color:"red" }}/> {15-(props.points)} wrong 
    </div>
    <p>Points scored are:</p>
    <h2>{props.points}</h2>
    <ReplayIcon style={{  cursor:"grab"}} onClick={refreshPage}/> Replay
    <p> </p>
    <p>You can submit score or replay </p>

     </div>
     <div className="but">
     <Button onClick={score} disabled={disabled}>{disabled ? 'Submitted':'submit score to view rank'}</Button>
     </div>
     <div className="but">
     <TableContainer component={Paper} align="center">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name </StyledTableCell>
            <StyledTableCell align="center" style={{width:'10%'}}>Scores   </StyledTableCell>
            <StyledTableCell align="center">   ranks </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
       {input.map((detail,index)=>{return(
            <StyledTableRow key={detail.id}>
              <StyledTableCell component="th" scope="row">
                {detail.user}
              </StyledTableCell>
              <StyledTableCell align="center">{detail.pointing}</StyledTableCell>
              <StyledTableCell align="center">  {index+1}</StyledTableCell>

            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </Jumbotron> 
 )}
export default End;