import React from 'react'
import './navi.css'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Navi() {
    return (
        <div>
            <nav class="navbar"> 
      <div class="logo"><img src="logoforweb.png" />  </div>       
        <div class="brand-title"><p>Gatemock</p></div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links"> 
    
                       <ul>
                       <li class="current"><a href="index.html"><HomeIcon/>  Home</a></li>
            <li class="current"><a href="wwu.html"><WorkIcon/>work with us</a></li>
            <li class="current"><a href="how.html"><HowToRegIcon/>how are we??</a></li>
            <li class="current"><a href="connect.html"><ContactMailIcon/>contact</a></li>

          </ul>
        
          </div>
          <div class="fab">
           <a href=""> <FacebookIcon  style={{ fontSize: 35, }}/></a>
            <a href=""><WhatsAppIcon style={{ fontSize: 35 }}/></a>
           <a href=""><TwitterIcon style={{ fontSize: 35 }}/></a>
            <a href=""><InstagramIcon style={{ fontSize: 35 }}/></a>
            <a href=""><GitHubIcon style={{ fontSize: 35 }}/></a>
            </div>
      
          </nav>
        </div>
    )
}

export default Navi
