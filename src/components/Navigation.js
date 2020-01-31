import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect,Link,Switch} from 'react-router-dom';
import AuthService from '../services/AuthService';
import Home from './Home'
import Users from './CreateUser'
import CrearCasillero from './CreateCasillero'
import VenderCasillero from './VenderCasillero'
import BloqueA from './BloqueA'
import BloqueB from './BloqueB'
import BloqueC from './BloqueC'
import BloqueD from './BloqueD'
import BloqueE from './BloqueE'
import BloqueF from './BloqueF'
import BloqueG from './BloqueG'
import BloqueP from './BloqueP'
import BloqueCefac from './BloqueCefac'

import {Navbar} from 'react-bootstrap'


export default class Navigation extends Component {
    authService = new AuthService();
    

    render() {
        const userRol = this.authService.getRol();
        return (<Router>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className="text-white" href="/">Casilleros App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item nav-link" style={{display:userRol==='V'?'none':''}}>
                            <Link to="/casilleros/create" style={{textDecoration:'none', color:'#FFF'}}>Crear casilleros</Link>
                        </li>
                        <li className="nav-item nav-link" style={{display:userRol==='V'?'none':''}}>
                            <Link to="/users" style={{textDecoration:'none', color:'#FFF'}}>Usuarios</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-link">
                            <p className="text-white"><i className="material-icons">person</i>{this.authService.getUserName()}</p>
                        </li>
                        <li className="nav-item nav-link" onClick={this.authService.logout}>
                            <Link to="/login" style={{textDecoration:'none', color:'#FFF'}}>Salir</Link>
                        </li>
                    </ul>
                    
                </Navbar.Collapse>
            </Navbar>

            <div className="container p-4">
                <Switch>
                <Route path="/" exact render={routeProps => <Home/>}></Route>
                <Route path="/casilleros/create" exact render={routeProps => <CrearCasillero {...routeProps} />}></Route>
                <Route path="/users" exact render={routeProps => <Users/>}></Route>
                <Route path="/casilleros/bloqueA" exact render={routeProps => <BloqueA/>}></Route>
                <Route path="/casilleros/bloqueB" exact render={routeProps => <BloqueB/>}></Route>
                <Route path="/casilleros/bloqueC" exact render={routeProps => <BloqueC/>}></Route>
                <Route path="/casilleros/bloqueD" exact render={routeProps => <BloqueD/>}></Route>
                <Route path="/casilleros/bloqueE" exact render={routeProps => <BloqueE/>}></Route>
                <Route path="/casilleros/bloqueF" exact render={routeProps => <BloqueF/>}></Route>
                <Route path="/casilleros/bloqueG" exact render={routeProps => <BloqueG/>}></Route>
                <Route path="/casilleros/bloqueP" exact render={routeProps => <BloqueP/>}></Route>
                <Route path="/casilleros/bloqueCefac" exact render={routeProps => <BloqueCefac/>}></Route>
                <Route path="/casilleros/editpepe/:id" exact render={routeProps => <CrearCasillero {...routeProps} />}></Route>
                <Route path="/casilleros/vender/:id" exact render={routeProps => <VenderCasillero {...routeProps} />}></Route>
                <Redirect from='*'  to='/'/>
                </Switch>
            </div>
            </Router>
        )
    }
}
