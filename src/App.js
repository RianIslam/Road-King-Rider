
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
    <h3> email  :{loggedInUser.email}</h3>
    <Router>
    <Navbar/>
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
