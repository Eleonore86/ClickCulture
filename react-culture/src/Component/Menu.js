import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    changeSelectTheme = (e) => {
        this.props.changeTheme(e.target.value)
    }
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-2">
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to='/addAnnonce'>Ajouter une librairie</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to='/favoris'>Recherches précédantes</Link>
                    </li>
                     {/* <li className="nav-iem m-2">
                        <select onChange={this.changeSelectTheme}><option>Verlaine</option><option>dark</option></select>
                    </li>  */}
                </ul>
            </div>
        );
    }
}

export default Menu;