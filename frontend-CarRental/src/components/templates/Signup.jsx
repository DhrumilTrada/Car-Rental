import React from 'react';
import './Auth.css'; // Custom CSS for styling

function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      <div className="auth-box">
        <h2 className="auth-title">Join Us!</h2>
        <p className="auth-subtitle">Create an account to rent your dream cars.</p>
        <form className="auth-form">
          <div className="auth-input-container">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>
          <div className="auth-input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="auth-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="auth-input-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default SignupPage;
