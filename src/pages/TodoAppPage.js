import React from 'react'
import TodoApp from '../components/TodoApp'
import {Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './todoApp.css'
const TodoAppPage = () => {
 const {signout}=useAuth();
  const navigate = useNavigate();
  const handleLogOut =async ()=>{

        try{
            await signout()
        }catch(error){
          console.log(error);
        }
        navigate("/login")

  }
  return (
    <div className="App">
      <header className='app-header' >
     <h1>Task App</h1>
     <button id='logOutBtn' onClick={handleLogOut} >
      Log Out
     </button>
     <Link id='updateProfileBtn' to='/to-update-profile' >
      Update Profile
     </Link>
      </header>
       <TodoApp/>
    </div>
  )
}

export default TodoAppPage