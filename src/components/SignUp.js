import React , {useState} from 'react'
import {Card , Form , Button} from 'react-bootstrap'
import { useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { Alert } from 'react-bootstrap'
import { Link, Navigate,} from 'react-router-dom'
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confPassRef = useRef();
    const [error,setError] = useState(null);
    const [loading , isLoading] = useState(false);
    const [signUpSucess,setSignUp]= useState(false);
    const {signUp} = useAuth();
    const handleSubmit = async (e)=>{


          if(passwordRef.current.value !== confPassRef.current.value){
            return  setError('Password Doesn,t Match')
          }
        try{
          setError('')
          isLoading(true);
        await signUp(emailRef.current.value, passwordRef.current.value)
             setSignUp(true);
        } catch(err){
          setError(JSON.stringify(err.message.split('/')[1].split(')')[0].toUpperCase()))
        }
        isLoading(false);
    }
   
     if(signUpSucess){
      console.log("navigatin");
           return  <Navigate to="/login" /> 
    } else{

      return (
        <>
    
    {/* <Card>
    <h3 className='text-center' >SignUp</h3>
    
      <Card.Body>
          {error && <Alert variant='danger' >{error}</Alert>}
        <Form>
            <Form.Group id="email" >
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" >
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="confPassword" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' ref={confPassRef} required />
            </Form.Group>
        </Form>
        <Button disabled={loading} type='submit' className='w-100 mt-4' onClick={handleSubmit} > SignUp</Button>

      </Card.Body>
    </Card>
    <div className='text-center mt-2 w-100' >
        Already have an account ? { <Link to='/login' >Log In</Link> }
        
    </div> */}
  <div
    className="parentContainer" 
      >
       <div>
      <div className="Card" >
        <h3 className="text-center">SignUp</h3>

          {error && <p className="danger">{error}</p>}
          <form>

              <label>Email</label>
              <input type="email" ref={emailRef} required />
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
              <label>Confirm Password</label>
              <input type="password" ref={confPassRef} required />
            
          </form>
          <button 
            disabled={loading}
            type="submit"
            className="formBtn"
            onClick={handleSubmit}
          >
            SignUp
          </button>
        {/* <div className="ancher_div" >
          <a href="/forget-password"  >Forget Password</a>
        </div> */}
      </div>
      <div className="ancher_div">
      Already have an account ? <a href="/login">Log In</a>
      </div>
          </div>
   </div>
    </>
  )
}
}

export default SignUp