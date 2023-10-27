import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { Link} from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPassRef = useRef();
  const [error, setError] = useState(null);
  const [loading, isLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { updateEmailftn, updatePass , currentUser } = useAuth();
  const handleSubmit =  async (e) => {
    if (passwordRef.current.value !== confPassRef.current.value) {
      return setError("Password Doesn,t Match");
    }
    if(emailRef.current.value){

        if (currentUser.email !== emailRef.current.value){
            try {
                setError('')
                isLoading(true);
                await updateEmailftn(emailRef.current.value);
            } catch (err) {
                
                return  setError(
                    JSON.stringify(
                        err.message.split("/")[1].split(")")[0].toUpperCase()
                        ))
                    }
                }
            }
    if(passwordRef.current.value){
        try {
            setError('')
            isLoading(true);
            await updatePass(passwordRef.current.value);
        } catch (err) {
          return  setError(
              JSON.stringify(
                err.message.split("/")[1].split(")")[0].toUpperCase()
              )
            );
        }
    }
    setMessage('Account Updated Successfully');
    isLoading(false);
  };

  return (
    <>
      <Card>
        <h3 className="text-center">Update Profile</h3>

        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Leave blank if dont want to update" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Leave blank If you dont want to update" />
            </Form.Group>
            <Form.Group id="confPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confPassRef}  />
            </Form.Group>
          </Form>
          <Button
            disabled={loading}
            type="submit"
            className="w-100 mt-4"
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
      <div className="text-center mt-2 w-100">
         {<Link to="/" className="btn btn-success " >DashBoard</Link>}
      </div>
    </>
  );
};

export default UpdateProfile;
