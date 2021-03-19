
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


function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" >
      <Home/>
      </Route>
      <Route path="/destination">
      <Destination/>
      </Route>
      <Route exact path="/login" >
      <Login/>
      </Route>
    </Switch>
    
    </Router>

      
    </div>
  );
}

export default App;
