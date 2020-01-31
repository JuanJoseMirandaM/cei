import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import AuthService from '../services/AuthService';


export default class CreateCasillero extends Component {
    authService = new AuthService();
    
    state = {
        vendedor:'',
        bloque: '',
        numero: '',
        codigo: '',
        precio: '',
        estadoSelected: '',
        nombre: '',
        ci: '',
        celular:'',
        fecha: new Date(),
        crear: true,
        _id: ''
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            //console.log(this.props.match.params.id)
            const res = await axios.get('https://casilleros-app.herokuapp.com/api/casilleros/' + this.props.match.params.id);
            //console.log(res.data)
            this.setState({
                vendedor: res.data.estado==="V"?res.data.vendedor:this.authService.getUserName(),
                bloque: res.data.bloque,
                numero: res.data.numero,
                codigo: res.data.codigo,
                precio: res.data.precio,
                estadoSelected: res.data.estado,
                nombre: res.data.nombre,
                ci: res.data.ci,
                celular:res.data.celular,
                fecha: new Date(res.data.updatedAt),
                _id: res.data._id,
                crear: false
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (!this.state.crear) {
            const updatedCasillero = {
                vendedor: this.state.vendedor,
                bloque: this.state.bloque,
                numero: this.state.numero,
                codigo: this.state.codigo,
                precio: this.state.precio,
                estado: this.state.estadoSelected,
                nombre: this.state.nombre,
                ci: this.state.ci,
                celular:this.state.celular,
                fecha: this.state.fecha,
            };
            await axios.put('http://localhost:4000/api/casilleros/' + this.state._id, updatedCasillero);
        } else {
            const newCasillero = {
                bloque: this.state.bloque,
                numero: this.state.numero,
                codigo: this.state.bloque+this.state.numero,
                precio: this.state.precio,
            };
            axios.post('http://localhost:4000/api/casilleros', newCasillero);
        }
        window.location.href = '/casilleros/bloque'+this.state.bloque;

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = fecha => {
        this.setState({ fecha });
    }

    onCancel = async (e) => {
        e.preventDefault();
        window.location.href = '/casilleros/bloque'+this.state.bloque;

    }

    render() {
        
        const userName = this.authService.getUserName();
        //console.log('user',userName)
        if (userName!=='pepe') {
            window.location.href = '/casilleros/bloque'+this.state.bloque;
        }
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Casillero {this.state.codigo}</h4>
                    <form>
                        <div className="form-group" style={{display:this.state.crear===true?'none':''}}>
                            <label>User</label>
                            <input type="text" className="form-control" name="vendedor" value={this.state.vendedor} required onChange={this.onInputChange}/>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label>Bloque</label>
                                <input type="text" className="form-control" name="bloque" value={this.state.bloque} required onChange={this.onInputChange}/>
                            </div>
                            <div className="col">
                                <label>Numero</label>
                                <input type="text" className="form-control" name="numero" value={this.state.numero} required onChange={this.onInputChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number" className="form-control" name="precio" value={this.state.precio} required onChange={this.onInputChange}/>
                        </div>
                        <div className="form-group" style={{display:this.state.crear===true?'none':''}}>
                            <label>Estado</label>
                            <select
                                className="form-control"
                                value={this.state.estadoSelected}
                                onChange={this.onInputChange}
                                name="estadoSelected"
                                required>
                                <option key="D" value="D">Disponible</option>
                                <option key="R" value="R">Reservado</option>
                                <option key="V" value="V">Vendido</option>
                            </select>    
                        </div>
                        <div className="form-group" style={{display:this.state.crear===true?'none':''}}>
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="nombre" value={this.state.nombre}  onChange={this.onInputChange}/>
                        </div>
                        <div className="form-row" style={{display:this.state.crear===true?'none':''}}>
                            <div className="col">
                                <label>CI</label>
                                <input type="text" className="form-control" name="ci" value={this.state.ci} onChange={this.onInputChange} required/>
                            </div>
                            <div className="col">
                                <label>Numero Celular</label>
                                <input type="number" className="form-control" name="celular" value={this.state.celular} onChange={this.onInputChange} required/>
                            </div>
                        </div>
                        <div className="form-group" style={{display:this.state.crear===true?'none':''}}>
                            <label>Fecha</label><br/>
                            <DatePicker className="form-control" required selected={this.state.fecha} dateFormat="dd/mm/yyyy HH:mm" onChange={this.onChangeDate} />
                        </div>
                        
                        <div className="form-row">
                            <div className="col">
                                <button className="btn btn-primary"  onClick={this.onSubmit}>
                                    <i className="material-icons">assignment</i> Guardar
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-danger" onClick={this.onCancel}>
                                    <i className="material-icons">cancel</i> Cancelar
                                </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
