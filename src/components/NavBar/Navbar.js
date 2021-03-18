import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                
                    <a className="navbar-brand" to="/#"></a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item p-3">
                                <a className="nav-link active" aria-current="page" to="/#">Home</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link active" aria-current="page" to="/#">Destination</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link active" aria-current="page" to="/#">Blog</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link active" aria-current="page" to="/#">Contact</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
