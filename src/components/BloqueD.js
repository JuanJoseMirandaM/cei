import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class BloqueD extends Component {
    state = {
        casilleros: []
    }

    async componentDidMount() {
        this.getCasilleros();
    }

    getCasilleros = async () => {
        const res = await axios.get('https://casilleros-app.herokuapp.com/api/casilleros/?valor=D')
        this.setState({
            casilleros: res.data
        });
        //console.log(res.data)
    }

    render() {
        return (
            
            <div className="row">
                <div className="col-md-12 text-white">
                    <h1>Bloque D</h1>
                </div>
                
            {
                this.state.casilleros.map(casillero => (
                    <div className="col-md-1 p-2" key={casillero._id}>
                        <Link to={"vender/" + casillero._id} className="text-decoration-none">
                            <div className={casillero.estado==="D"?"card text-white bg-success mb-3":casillero.estado==="R"?"card text-white bg-warning mb-3":"card text-white bg-danger mb-3"} >
                                <div className="card-header">{casillero.codigo}</div>
                            </div>
                        </Link>
                    </div>
                ))
            }
            </div>
        )
    }
}
