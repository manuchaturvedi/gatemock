import React, {Component } from 'react'
import fire from "./config/fire";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import "./App.css";
import Alert from 'react-bootstrap/Alert'

export default class Login extends Component {
    constructor(props)
    {super(props)
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);

     this.state={
         email:"",
         password:"",
         show:true,
          errorlogin:false,
          errorsignin:false

     }
    }
    
    login(e){
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
           this.setState(()=>
           {return {errorlogin:true}}
           )
        })
    }  
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
          this.setState(()=>
          {return {errorsignin:true,
                   errorlogin:false
          }}
          )
        })
    }
    
    render() {
        return (
            
<div>
      <Modal show={this.state.show}>
        <Modal.Header closeButton>
          <Modal.Title>Login to Take test</Modal.Title>
        </Modal.Header>
             <Modal.Body>  <form>
             <Form.Group controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
              <FormControl 
              type="email"
               name="email"
               id="email"
               placeholder="enter email address"
               onChange={this.handleChange}
               value={this.state.email}
              />      
                 
              </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password"
                  id="password"                    
                  placeholder="enter the password"
                  onChange={this.handleChange}
                  value={this.state.password}/>
                  <Form.Text className="text-muted">
                    {this.state.errorlogin?<Alert variant="danger">wrong password or email,please signin if you are a new user</Alert>:this.state.errorsignin?<Alert variant="warning">if you are a new user please use proper email and password</Alert>:<div>"If you don't have account then please! click signup"</div> }
              </Form.Text> 
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                 </Form.Group>
                    </form>
               </Modal.Body>
               <Modal.Footer>
          <Button variant="secondary" onClick={this.signup}>
            Signup
          </Button>
          <Button variant="primary" onClick={this.login}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}





