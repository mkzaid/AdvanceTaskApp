import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
     <Container 
    className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}
      >
       <div className="w-100" style={{maxWidth:'400px'}} >
      <Card>
        <h3 className="text-center">Log In</h3>

        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
          </Form>
          <Button
            disabled={loading}
            type="submit"
            className="w-100 mt-4"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </Card.Body>
        <div className="text-center mt-2 mb-2 w-100">
          {<Link to="/forget-password">Forget Password</Link>}
        </div>
      </Card>
      <div className="text-center mt-2 w-100">
        Need an Account ? {<Link to="/signup">Sign Up</Link>}
      </div>
          </div>
   </Container>
    </>
  );
};

export default LogIn;
