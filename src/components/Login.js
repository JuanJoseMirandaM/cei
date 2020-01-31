import React,{Component} from 'react';
import AuthService from './../services/AuthService';
import './login.css'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''};
    this.Auth = new AuthService();
}

  onInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  
  render(){
    return(
      <div className="body">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <div className="text-center mb-2">
            <h1 className="h3 mb-3 font-weight-normal text-white">Casilleros App</h1>
          </div>
            
          <div className="form-label-group">
            <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required autoFocus value={this.state.email} onChange={this.onInputChange}/>
            <label htmlFor="inputEmail">Email address</label>
          </div>
          
          <div className="form-label-group">
            <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onInputChange}/>
            <label htmlFor="inputPassword">Password</label>
          </div>
          
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted text-center text-white">&copy; 2020, Pepe Systems</p> 
        </form>
      </div>
    )
  }

  onSubmit = async (e) => {
    e.preventDefault();
    //console.log(this.state);
    /*  const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    const res = await axios.post('http://localhost:4000/api/users/login', newUser);*/
    this.Auth.login(this.state.email,this.state.password).then(resp=>{
      //this.props.onAuthChange();
      window.location.href = '/';
    }).catch(err=>{
        alert(err);
    })
    //console.log(res.data)
  }

}

export default Login;