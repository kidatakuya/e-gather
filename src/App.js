// import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ArtistSelection from './components/ArtistSelection/ArtistSelection';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/ArtistSelection' component={ArtistSelection}/>
        <Route path='/Home' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
