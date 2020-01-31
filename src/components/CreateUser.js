import React, { Component } from 'react'
import axios from 'axios'
import AuthService from '../services/AuthService';

export default class CreateUser extends Component {
    authService = new AuthService();
    state = {
        username:'',
        email:'',
        password:'',
        rol:'V',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('https://casilleros-app.herokuapp.com/api/users');
        this.setState({
            users: res.data
        });
        //console.log(res.data)
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = rol => {
        this.setState({ rol });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            rol: this.state.rol,
        };
        await axios.post('http://localhost:4000/api/users', newUser);
        this.setState({ username: '', email:'', password:'' });
        this.getUsers();
    }

    deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUsers();
        }
    }

    render() {
        const userRol = this.authService.getRol();
        if (userRol==='V') {
            window.location.href = '/casilleros/bloque'+this.state.bloque;
        }
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name1">Name</label>
                                <input type="text" className="form-control" required name="username" value={this.state.username} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" required name="email" value={this.state.email} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Password</label>
                                <input type="password" className="form-control" required name="password" value={this.state.password} onChange={this.onInputChange}/>
                            </div>
                            <div className="form-group" style={{display:this.state.crear===true?'none':''}}>
                            <label>Rol</label>
                            <select
                                className="form-control"
                                value={this.state.rol}
                                onChange={this.onInputChange}
                                name="rol"
                                required>
                                <option key="V" value="V">Vendedor</option>
                                <option key="A" value="A">Admin</option>
                            </select>    
                        </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                <div className="card card-body">
                    <h2>Users list</h2>
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{user.username}</h5>
                                        <small>{user.email}</small>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
