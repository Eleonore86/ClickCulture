import React, { Component } from 'react';
import {historique, isLogged } from '../service/DataService';
import Libraires from './Libraires';


class Historique extends Component {
    constructor(props) {
        super(props);
        if(!isLogged) {
            this.props.history.push("login/historique")
        }
        this.state = {
            libraires : historique
        }
    }
    render() { 
        return ( 
            <div className="Container">
                <Libraires libraires={this.state.libraires}></Libraires>
            </div>
         );
    }
}
 
export default Historique;