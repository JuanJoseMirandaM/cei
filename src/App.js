
import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AuthService from './services/AuthService'
import Login from './components/Login'
import Navigation from './components/Navigation'

class App extends Component{

  constructor(props){
    super(props);
    this.auth = new AuthService();
    this.state = {
      auth: this.auth.loggedIn()
    };
  }
  
  render(){
    if(this.state.auth){
      console.log("login exitoso")
      return (
        <Navigation></Navigation>
      );
    }
    return (
      <Router>
        <div>
        <Switch>
        <Route path="/login"  render={routerProps=><Login/>}></Route>
        <Redirect from='*'  to='/login'/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;




