import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook} from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

import { Link } from 'react-router-dom';
function Signup() {
  const iconStyle={color:"skyblue"};
  
  

  const textStyle={textDecoration: "none",color:"black"};
  
  return (
    <div>
      <div className='container'>
   
      <div className='header'>
       <img src={logo} className="App-logo" alt="logo" />
        <h3>Join The Journey With Educase India Private Limited</h3>
      </div>
      <div className='content'>
      <div  className='content-heading'>
         <div>
          <h2><Link to="/" style={textStyle}>Login</Link></h2></div>
      <div className='con-text-2'><h2>Signup</h2>
      </div>
       </div>
        <form>
        <input type="text" placeholder='Enter Name' required></input><br></br>
        <input type="email" placeholder='Email Address'></input><br></br>
        <input type="password" placeholder="Password" required></input><br></br>
        <input type="submit" placeholder='Signup' id="login"></input>
        </form>
        <h6 id="for-h6"><Link to="/Forgetpassword">Forgot Password?</Link></h6>
      </div>
              <p id="text-login">or login with</p>
      <div className='media'>
    <FcGoogle size={32}/> <TiSocialFacebook size={32}/> <AiFillTwitterCircle size={32} style={iconStyle}/>
       </div>
       <div className='floter'>
       <p id="flot-text">Don't have an account? <a targrt="blank" >Create new now!</a></p><br></br>
        <p>By Signing up, you are agree width or <span id="flot-text-3"><Link to="/tems" style={{color:"rgb(231,84,128)"}}>Terms& condition</Link></span></p>
       </div>
       </div>
    </div>
  );
}

export default Signup;
