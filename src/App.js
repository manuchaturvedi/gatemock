import React from 'react';
import Data from './Data.js';
import que from './question.js';
import Startingpage from './startingpage.js';
import End from './end.js';
import Navi from './Navi.js';
import "./startingpage.css";
import Slider from './Slider.js';
import Navbar from 'react-bootstrap/Navbar';
import Test from './test2.js';
import Footer from './footer.js';

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
        
      
        
      }
      
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
      if(this.state.currentquestion===this.state.qbank.length-1  ){
        this.setState({
          quizend:true
        })
      }
    }
  

    startquiz=(whic)=>
    {
      this.setState({
        start:true,
        currentquestion:0,
        qbank:[...whic]
      })
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
    
    if(this.state.start)
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
    return(
      <div>
        
        <Navi />
        <Slider/>
      <div className="startingpage">
     <div className="firstapp">
     <Startingpage
        title="G.A.T.E MOCK"
        disc="Computer science mock test from the manch design"
        startquiz={()=>this.startquiz(que)}
        /> 
    </div>
    </div>
    <Footer />
    </div>
    )
  }
   }
}
}
export default App;
