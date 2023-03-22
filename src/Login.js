import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook} from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import {Link} from'react-router-dom';

function Login() {
  const iconStyle={color:"skyblue"};
  const textStyle={textDecoration: "none",paddingLeft:"100px",color:"black"};
  
  return (
    <div>
      <div className='container'>
   
      <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Join The Journey With Educase India Private Limited</h3>
      </div>
      <div className='content'>
      <div  className='content-heading'>
         <div  className='con-text-1'><h2>Login</h2></div> <div><h2><Link to="/sign" style={textStyle}>Signup</Link></h2></div>
       </div>
        <form>
        <input type="email" placeholder='Email Address'></input><br></br>
        <input type="password" placeholder="Password" required></input><br></br>
        <input type="submit" value='LOGIN' id="login"></input>
        </form>
        <h6 id="for-h6">Forgot Password?</h6>
      </div>
              <p id="text-login">or login with</p>
      <div className='media'>
    <FcGoogle size={32}/> <TiSocialFacebook size={32}/> <AiFillTwitterCircle size={32} style={iconStyle}/>
       </div>
       <div className='floter'>
       <p id="flot-text">Don't have an account? <a targrt="blank" >Create new now!</a></p><br></br>
        <p>By Signing up, you are agree width or <span id="flot-text-3">Terms& condition</span></p>
       </div>
       </div>
    </div>
  );
}

export default Login;
