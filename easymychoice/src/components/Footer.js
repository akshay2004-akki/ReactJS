import React from "react";
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
      <div
        style={{
          transform: "translateY(150px)",
          backgroundColor: "lightblue",
          height: "60vh",
          width: "100%",
        }}
      >
        <div className="container footer" style={{}}>
          <div>
            <h5
              style={{ fontFamily: "Dosis", transform: "translateX(30.5px)" }}
            >
              About EaseMyChoice
            </h5><br />
            <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  <Link to='/about' style={{textDecoration:"none", color:"black"}}>About Us</Link></li> 
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Press</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Blog</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Testimonials</li>
            </ul>
          </div>
          <div className="display">
            <h5
              style={{ fontFamily: "Dosis", transform: "translateX(30.5px)" }}
            >
              Useful Reads
            </h5><br />
            <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Terms & Conditions</li> 
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Privacy & Cookie Policy</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Anti Spam Policy</li>
            </ul>
          </div>
          <div className="display">
            <h5
              style={{ fontFamily: "Dosis", transform: "translateX(30.5px)" }}
            >
              Special Pages
            </h5><br />
            <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Refer and Earn</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Careers</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Become our Partner</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Student Program</li>
            </ul>
          </div>
          <div>
            <h5
              style={{ fontFamily: "Dosis", transform: "translateX(30.5px)" }}
            >
              Connect With Us
            </h5><br />
            <ul style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Help</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Contact Us</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Facebook</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Twitter</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Instagram</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  LinkedIn</li>
              <li><i class="fa-sharp fa-thin fa-greater-than"></i>  Youtube</li>
            </ul>
          </div>
        </div>
        <div style={{display:"grid",placeItems:"center",backgroundColor:"#999", height:"60px", width:"100%", transform:"translateY(58.5px)"}}>
            <p>&copy;Copyright 2024 EaseMyChoice. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
