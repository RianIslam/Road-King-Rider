
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>



    <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                
                    <Link className="navbar-brand" to="/">Ride</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item p-3">
                            
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                
                            </li>
                            <li className="nav-item p-3">
                           
                                <Link className="nav-link active" aria-current="page" to="/destination">Destination</Link>
                                
                            </li>
                            <li className="nav-item p-3">
                           
                                <Link className="nav-link active" aria-current="page" to="/">Blog</Link>
                                
                            </li>
                            <li className="nav-item p-3">
                            
                                <Link className="nav-link active" aria-current="page" to="/login"><button className="btn btn-danger">Login {(loggedInUser.email)}</button></Link>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>









    
    <Switch>
      <Route exact path="/" >
      <Home/>
      </Route>
      <Route exact path="/login" >
      <Login/>
      </Route>
      <PrivateRoute exact path="/destination">
      <Destination/>
      </PrivateRoute>
      
    </Switch>
    
    </Router>

      
    </UserContext.Provider>
  );
}

export default App;
