<<<<<<< HEAD
=======
import React, { Component } from 'react';
import {getLibraireById} from '../Service/DataService';
import {Carousel} from 'antd';

class DetailLibraire extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            libraire: undefined,
                     }
    }

    componentDidMount () {
        getLibraireById(this.props.match.params.id).then(res => {
            if(!res.data.error) {
                this.setState({
                    libraire : res.data.libraire
                })
            }
            else {
                alert(res.data.message)
            }
        })
    }


    render() { 
        return ( 
            <div className="container">
                 {this.state.libraire != undefined ?
                (
                    <div className="container">
                        <Carousel autoplay>
                            {this.state.libraire.images.map(
                                (images, index) =>
                                (<div key={index}><img style={contentStyle} src={image} /></div>)
                            )}
                        </Carousel>
                        <div className="row m-1">
                            <h1 className="col">{this.state.libraire.nom}</h1>
                        </div>
                        <div className="row m-1">
                            <div className="col">{this.state.libraire.description}</div>
                        </div>
                    </div>
                ) :
                (
                    <div>Aucun libraire avec cet id</div>
                )
                }
            </div>
               
            
        )
    }
}
 
export default DetailLibraire;
>>>>>>> fb9971718b6ca58f41023d0a39d725944237e3f5
