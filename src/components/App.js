
import SignUp from "./SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import LogIn from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import ForgetPassword from "./ForgetPassowrd";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
import TodoAppPage from "../pages/TodoAppPage";
function App() {

  return (

    
    // <Container 
    // className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}
      // >
      //  {/* <div className="w-100" style={{maxWidth:'400px'}} > */}
    <AuthProvider>
<Router>
         <Routes>
        <Route exact path="/" element={ <PrivateRoute>
          {/* <Dashboard/> */}
          <TodoAppPage/>
          </PrivateRoute> } />
        <Route  path="/to-update-profile" element={ <PrivateRoute><UpdateProfile/></PrivateRoute> } />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/forget-password" element={<ForgetPassword/>} />

         </Routes>
</Router>
   </AuthProvider>
)
      //  {/* </div> */}
  // </Container>
  ;
}

export default App;
