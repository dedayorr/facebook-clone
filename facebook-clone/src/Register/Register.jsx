import React from 'react'
import "./Register.css"

 function Register() {
  return (
    <div className="registration-form-container">
      <div className="registration-form-heading">
        <h2>Create a new account</h2>
        <h4>It's quick and easy</h4>
      </div>
      <form className="registration-form">
        <input type="text" placeholder='First name'/>
        <input className="surname-input" type="text" placeholder='Surname'/>
        <input  className="mobile-input" type="text" placeholder='Mobile number or email address'/>
        <input  className="password-input" type="password" placeholder='New password'/>
          <label className="dob">Date of  birth</label>
        <div className='dropdown'>
          <select>
            <option>1</option>
          </select>
          <select>
            <option>Jan</option>
          </select>
          <select>
            <option>1997</option>
          </select>
        </div>
        <label className="gender-input">Gender</label>
      <div className="radio-buttons">
        <span className="single-radio">
          <label>Female</label>
          <input type="radio"/>
        </span>
        <span>
          <label>Male</label>
          <input type="radio" />
        </span>
        <span>
          <label>Custom</label>
          <input type="radio"/>
        </span>
      </div>
      <div className="registration-clause">
        <p>People who use our service may have uploaded your contact information to Facebook.<a href="">Learn More</a></p>
        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
      </div>
      <button className="register-submit-btn" type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Register