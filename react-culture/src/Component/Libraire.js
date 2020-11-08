import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Libraire extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state != nextState || this.props != nextProps
    }
    render() { 
        const libraire = this.props.libraire
        return ( 
            <div className="row m-1 justify-content-center align-items-center">
                 <div className="col-3">
                     {/* Plusieur pics pour le libaire */}
                     <img src={libraire.images[0]} />  
                 </div>
                 <div className="col-7">
                     <div className="row m-1">
                         <div className="col">
                             {libraire.nom}
                         </div>
                     </div>
                     <div className="row m-1">
                         <div className="col">
                             {libraire.rue}
                         </div>
                     </div>
                     <div className="row m-1">
                         <div className="col">
                             {libraire.codePostal}
                         </div>
                     </div>
                     <div className="row m-1">
                         <div className="col">
                             {libraire.ville}
                         </div>
                     </div>
                     <div className="row m-1">
                         <div className="col">
                             {libraire.description.substr(0, 50)}
                         </div>
                     </div>
                 </div>
                 <div className="col-2">
                     <Link className="btn btn-primary" to={'/detail/' + libraire.id}>Detail</Link>
                 </div>
             </div>
         );
    }
}
 
export default Libraire;