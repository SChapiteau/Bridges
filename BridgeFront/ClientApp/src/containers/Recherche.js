import React, { Component } from 'react';

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
        alert('Le nom a été soumis : ' + this.state.NomEntreprise);
        this.setState({
            items: ["item1", "item2", "item3"
                //{ "id": 1, "name": "Apples", "price": "$2" },
                //{ "id": 2, "name": "Peaches", "price": "$5" }
            ]
        });
        console.log(this.state.items)

        event.preventDefault();
    }

    render() {

        var resultat;
        if (this.state.items.length > 0) {
            resultat = <div>resultat de recherche</div>
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
