import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4 p-2" key="A">
                    <Link to={"casilleros/bloqueA"} className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque A</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="B">
                    <Link to={"casilleros/bloqueB"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}> 
                            <div className="card-header">Bloque B</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="C">
                    <Link to={"casilleros/bloqueC"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque C</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="D">
                    <Link to={"casilleros/bloqueD"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque D</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="E">
                    <Link to={"casilleros/bloqueE"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque E</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="F">
                    <Link to={"casilleros/bloqueF"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque F</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="G">
                    <Link to={"casilleros/bloqueG"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque G</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="P">
                    <Link to={"casilleros/bloqueP"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque P</div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 p-2" key="Cefac">
                    <Link to={"casilleros/bloqueCefac"}  className="text-decoration-none">
                        <div className="card text-white bg-info mb-3" style={{'height': '100px'}}>
                            <div className="card-header">Bloque Cefac</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
