import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        
        <div>
             <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">GATEMOCk is startup to help student attain the goal for gate preparation in LockDown in India <i> This is free for All </i> is an initiative to help the engineering student for the gate. We will help student build up concepts in differe.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Study Material</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Mock Papers</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Networks</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">DBMS</a></li>
              <li><a href="http://scanfcode.com/category/android/">MATHS</a></li>
              <li><a href="http://scanfcode.com/category/templates/">ALGORITHM</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
    
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2019 All Rights Reserved by 
         <a href="#"> MachTech</a>.
            </p>
          </div>

         
        </div>
      </div>
      
</footer>
        </div>
    )
}

export default Footer
