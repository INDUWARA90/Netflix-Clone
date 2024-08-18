import React, { useState } from 'react'
import './login.css'
import logo from "../../../assets/logo.png";

function Login() {

  const [stateSign,setStateSign]=useState('Sign In');

  return (
    <div className='LOGIN'>
    <div className="logo">
        <img src={logo} alt="..." />
    </div>
      <div className="Container-From">
        <h1>{stateSign}</h1>
        <div className="body">
          <div className="inputs">
            {stateSign==='Sign In'?<></>:<input type="text" placeholder='Name' />}
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button>{stateSign}</button>

          </div>
          <div className="remeber-me-section">
            <div className="check-box">

              <input type="checkbox" name="" id="" />
              <p>Remeber Me</p>

            </div>
            <div className="Need-help">
            <p>  Need Help ? </p>
            </div>
          </div>
          <div className="new-to-netfilx">

            {
             stateSign==='Sign In'? <p>New To Netfilx?  <span onClick={()=>setStateSign('Sign Up')}>Sign Up Now</span></p>:
             <p>Already have account ?  <span onClick={()=>setStateSign('Sign In')}>Sign in Now</span></p>
            }
        
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login