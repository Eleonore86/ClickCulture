import React, { Component } from 'react';
import Libraire from './Libraire';

class Libraires extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state != nextState || this.props != nextProps
    }
    render() { 
        return ( 
            <div className="Container">
                {this.props.libraires.map(libraire=>(
                    <Libraire key={libraire.id} libraires={libraire}></Libraire>
                    ))}
            </div>
         );
    }
}
 
export default Libraires;