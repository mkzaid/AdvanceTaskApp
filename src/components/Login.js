import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [loading, isLoading] = useState(false);
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const handleSubmit = async (e) => {
    try {
      setError("");
      isLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      navigate('/')
    } catch (err) {
      setError(
        JSON.stringify(err.message.split("/")[1].split(")")[0].toUpperCase())
      );
    }
    isLoading(false);
  };

  return (
    <>
     <div
    className="parentContainer" 
      >
       <div>
      <div className="Card" >
        <h3 className="text-center">Log In</h3>

          {error && <p className="danger">{error}</p>}
          <form>

              <label>Email</label>
              <input type="email" ref={emailRef} required />
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            
          </form>
          <button 
            disabled={loading}
            type="submit"
            className="formBtn"
            onClick={handleSubmit}
          >
            Log In
          </button>
        <div className="ancher_div" >
          <a href="/forget-password"  >Forget Password</a>
        </div>
      </div>
      <div className="ancher_div">
        Need an Account ? <a href="/signup">Sign Up</a>
      </div>
          </div>
   </div>
    </>
  );
};

export default LogIn;
