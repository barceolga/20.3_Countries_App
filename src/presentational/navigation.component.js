import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

 const Navigation = propss => (
   <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="nvabar-haeder">
                    <Link className="navbar-brand" to"/">Countries.js</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/countries">Countries</Link></li>
                        <li><Link to="/continents">Continents</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
 );

 export default Navigation;
