
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


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
    
    <Switch>
      <Route exact path="/" >
      <Home/>
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
