import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { Link,} from "react-router-dom";
const ForgetPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, isLoading] = useState(false);

  const { resetPass } = useAuth();
  const handleSubmit = async (e) => {
    try {
      setError("");
      setMessage("")
      isLoading(true);
    //   await signIn(emailRef.current.value, passwordRef.current.value);
     await resetPass(emailRef.current.value);
     setMessage('Check Your Email for further Instructions');
    } catch (err) {
      setError(
        JSON.stringify(err.message.split("/")[1].split(")")[0].toUpperCase())
      );
    }
    isLoading(false);
  };

  return (
    <>
      <Card>
        <h3 className="text-center mt-4 ">Reset Password</h3>

        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert> }
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
          </Form>
          <Button
            disabled={loading}
            type="submit"
            className="w-100 mt-4"
            onClick={handleSubmit}
          >
            Reset
          </Button>
        </Card.Body>
      </Card>
      <div className="text-center mt-2 w-100">
        {<Link to="/login">Log in</Link>}
      </div>
    </>
  );
};

export default ForgetPassword;
