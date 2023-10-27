import React ,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Card , Button , Alert , } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {

    const [ error , setError]= useState('');
      const {currentUser, signout} = useAuth();
      const navigate = useNavigate();

   const handleLogOut = async() =>{
        setError('')
        try{
            await signout()
        }catch{
            setError('Failed To Log Out')
        }
        navigate("/login")
   }

  return (
    <>
      <Card>
        <h2 className="text-center">Profile</h2>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> { currentUser && currentUser.email}
        <Link to='to-update-profile' className="btn btn-primary w-100 mt-4 "  >Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="text-center mt-2 w-100">
        <Button variant="link" onClick={handleLogOut} > Log Out </Button>
      </div>
    </>
  );
}
