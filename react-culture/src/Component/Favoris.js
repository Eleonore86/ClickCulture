import React, { Component } from 'react';
import {favoris, isLogged } from '../Service/DataService';
import Libraires from './Libraires';


class Favoris extends Component {
    constructor(props) {
        super(props);
        if(!isLogged) {
            this.props.history.push("login/favoris")
        }
        this.state = {
            libraires : favoris
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
 
export default Favoris;