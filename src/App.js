import React from 'react';
import Data from './Data.js';
import que from './question.js';
import Startingpage from './startingpage.js';
import End from './end.js';
import Navi from './Navi.js';
import "./startingpage.css";
import Slider from './Slider.js';
import Footer from './footer.js';
import Login from './Login.js';
import fire from './config/fire.js';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(){
    super()
      this.state={
        proper:[],
        points:0,
        currentquestion:0,
        quizend:false,
        options:[],
        start:false,
        qbank:[...que],
        user:{},
        login:false,
        show:false,
        showalert:false
        
      }
      
    }
  

    authListener(){
      fire.auth().onAuthStateChanged((user)=>{
        if(user)
        {
          this.setState({user})
        }
        else{
          this.setState({user:null})
        }
      })
    }
    logout(){
      fire.auth().signOut();
  }
    check=(answer,ticked)=>{
      if(answer===ticked)
      {
        this.setState(prevState=>{
         return{ 
           points:prevState.points+1
        }
      }
        )
      }
      this.setState({
        currentquestion:this.state.currentquestion+1
      })
      
    }
    loadind=()=>
    {
      this.setState(()=>{
        return{
          questions:this.state.qbank[this.state.currentquestion].question,
          answers:this.state.qbank[this.state.currentquestion].answer,
          ids:this.state.qbank[this.state.currentquestion].id,
          options:this.state.qbank[this.state.currentquestion].option
        };
      });
    };
    componentDidMount(){
      this.loadind();
      this.authListener();

    }

    
    componentDidUpdate(prevProps,prevState)
    { 
   if(this.state.currentquestion !== prevState.currentquestion)
      {
        this.setState(()=>{
          return{
            questions:this.state.qbank[this.state.currentquestion].question,
            answers:this.state.qbank[this.state.currentquestion].answer,
            ids:this.state.qbank[this.state.currentquestion].id,
            options:this.state.qbank[this.state.currentquestion].option,
          };
        })
      }
     
    }
    finished=()=>
    {
        this.setState({
          quizend:true
        })
      }
    
  

    startquiz=(whic)=>
    {
      this.setState({
        start:true,
        showalert:true,
        currentquestion:0,
        qbank:[...whic],
      })
    }

    startlogin=()=>{
      this.setState({
        login:!this.state.login
      })
      console.log("heloo world")
    }
    
   render(){
     
    if(this.state.quizend)
    { 
    return(
      <End
     points={this.state.points}
    />
    )}
    else{ 
    
    if(this.state.start && this.state.user)
    {return(
      <div>
      <Data
          ids={this.state.ids}
          question={this.state.questions}
          option={this.state.options}   
          qcount={this.state.currentquestion}
          selected={ticked=>this.check(this.state.answers,ticked)}
          finished={()=>this.finished()}
          />
        
  </div>
  )}
  else{
  
      
        if(this.state.login&&!this.state.user)
        { return(
          <Login/>
        )}
        else{
          return(
            <div>
        <Navi />
        <Slider/>
        <div className="message">
          
        <style type="text/css">
    {`
    .btn-flat {
        background: #d9091d;
        color: #fff;

        border: 2px solid #d9091d;
        border-radius: 3px;
        padding: 2px 3px;
        font-size:15px;
        margin-left:10px;
        text-transform: uppercase;
    }
    .btn-flat:hover{
        background:#d14f5c;
        border:2px solid #d14f5c;
        color:white;
        transform: scale(1.02);
    }

    .btn-flatdis {
      background:#1b54bf;
      color: #fff;

      border: 2px solid #1b54bf;
      border-radius: 3px;
      padding: 2px 3px;
      font-size:15px;
      margin-left:10px;
      text-transform: uppercase;
  }
  .btn-flatdis:hover{
      border:2px solid #1b54bf;
      color:white;
      transform: scale(1.02);
  }
    `}
  </style>
          
            {this.state.user?<Alert variant="success">
    you are login,enjoy Qiuz
    <Button onClick={()=>this.logout()}
                 variant="flat" size="lg" active={false}>logout</Button> 
  </Alert>:<Alert variant='danger'>
    You Need to login to attempt Quiz! 
    <Button onClick={()=>this.startlogin()}
                 variant="flatdis" size="lg" active={false}>login</Button>  
                 




  </Alert>}
  </div>
      <div className="startingpage">
     <div className="firstapp">
     <Startingpage
        title="G.A.T.E MOCK"
        disc="Computer science mock test from the manch design"
        show={this.state.login}
        showalert={this.state.showalert}
        startquiz={()=>this.startquiz(que)}
        startlogin={()=>this.startlogin()}
        logout={()=>this.logout()}
        />   
        
    </div>
    </div>
    <Footer />
    </div>
          )}
    
  }
}
   }
}

export default App;
