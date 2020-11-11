import React, { Component } from 'react';
import { ajouterLibraire, isLogged} from '../Service/DataService';

class FormLibraire extends Component {
    constructor(props) {
        super(props);
        if(!isLogged) {
            this.props.history.push("/login/addLibraire")
        }
        this.state = { 
            nombreImages : 1,
            libraire : {
                nom : '',
                theme : '',
                description : '',
                rue : '',
                codePostal : '',
                ville : '',
                tel : '',
                images : []
            }
         }
    }

    changeField = (e) => {
        let tmpLibraire = {...this.state.libraire}
        tmpLibraire[e.target.getAttribute("name")] = e.target.value
        this.setState({
            libraire : {...tmpLibraire}
        })
    }

    changeImage = (e, index) => {
        let tmpLibraire = {...this.state.libraire}
        tmpLibraire.images[index] = e.target.value
        this.setState({
            libraire : tmpLibraire
        })
    }

    renderImagesField = () => {
        const imagesField = []
        for(let i=1 ; i <= this.state.nombreImages; i++) {
            imagesField.push(<input key={i} onChange={(e) => {this.changeImage(e,i-1)}} className="col-12 m-1 form-control" placeholder="url image" />)
        }
        return imagesField
    }

    ajouterImage = () => {
        const tmpNombreImages = this.state.nombreImages +1
        this.setState({
            nombreImages : tmpNombreImages
        })
    }

    validForm = (e) => {
        e.preventDefault()
        ajouterLibraire(this.state.libraire)
        this.props.history.push('/')
    }

    render() { 
        return (
            <form className="container" onSubmit={this.validForm}>
                <div className="row m-1">
                    <input type="text" onChange={this.changeField} name="nom" className="form-control col" placeholder="Nom de la librairie"/>
                </div>
                <div className="row m-1">
                    <input type="text" onChange={this.changeField} name="theme" className="form-control col" placeholder="Thème/spécialité de la librairie" />
                </div>
                <div className="row m-1">
                    <textarea className="form-control col" onChange={this.changeField} placeholder="description de l'activité de la librairie" name="description"></textarea>
                </div>
                <div className="row m-1">
                    <input onChange={this.changeField} name="rue" className="form-control col" placeholder="Saisissez le numéro et le nom de la rue" />
                </div>
                <div className="row m-1">
                    <input type ="number" onChange={this.changeField} name="codePostal" className="form-control col" placeholder="code postal" />
                </div>
                <div className = "row m-1">
                    <input type="text" onChange={this.changeField} name="ville" className="form-control col" placeholder="ville" />
                </div>
                <div className="row m-1">
                    <input type="number" onChange={this.changeField} name="tel" className="form-control col" placeholder="Saisisez le numéro de téléphone" />
                </div>
                <div className="row m-1">
                    <div className="col">
                        <div className="row m-1">
                            {this.renderImagesField()}
                        </div>
                    </div>
                    <a className="btn col-2 btn-info" onClick={this.ajouterImage}>Ajouter une image</a>
                </div>
                <div className="row m-1">
                    <button type="submit" className="btn col btn-success">Valider</button>
                </div>
            </form>
          );
    }
}
 
export default FormLibraire;
