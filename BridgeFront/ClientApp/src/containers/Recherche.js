import React, { Component } from 'react';
import { EntrepriseListItem } from '../components/Entreprise/EntrepriseListItem';

export class Recherche extends Component {
    static displayName = Recherche.name;

    constructor(props) {
        super(props);
        this.state = {
            NomEntreprise: '',
            items : []
        };

        this.rechercher = this.rechercher.bind(this);
        this.updateNomEntreprise = this.updateNomEntreprise.bind(this);
    }

    updateNomEntreprise(event) {
        this.setState({ NomEntreprise: event.target.value });
    }

    rechercher(event) {
        //alert('Le nom a été soumis : ' + this.state.NomEntreprise);
        this.setState({
            items: [
                { "id": 1, "Nom": "Apples", "SIRET": "1235132" },
                { "id": 2, "Nom": "Peaches", "SIRET": "15321" }
            ]
        });
        console.log(this.state.items)

        event.preventDefault();
    }

    render() {
         //{this.state.items.map(i => <li>{i.Nom} - {i.SIRET}</li>)}

        var resultat;
        if (this.state.items.length > 0) {
            resultat = <div>
                <p>resultat de recherche</p>
                <ul>                    
                    {this.state.items.map(i => <EntrepriseListItem e={i} />)}
                </ul>
            </div>
        }


        return (
            <div>
                <h1>Recherche</h1>
                <form onSubmit={this.rechercher}>
                    <label> Nom entreprise : <input type="text" value={this.state.NomEntreprise} onChange={this.updateNomEntreprise} /> </label>
                    <p><button className="btn btn-primary" onClick={this.rechercher}>Rechercher</button></p>
                </form>

                {resultat}
            
            </div>
        );
    }
}
