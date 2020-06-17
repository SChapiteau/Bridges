import React, { Component } from 'react';

export class Recherche extends Component {
    static displayName = Recherche.name;

    constructor(props) {
        super(props);
        this.state = { };

        this.rechercher = this.rechercher.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ NomEntreprise: event.target.value });
        console.log(event.target.value)
    }

    rechercher(event) {
        alert('Le nom a été soumis : ' + this.state.NomEntreprise);
        event.preventDefault();
    }

    render () {
    return (
            <div>
            <h1>Recherche</h1>
            <form onSubmit={this.rechercher}>
                <label> Nom entreprise : <input type="text" value={this.state.NomEntreprise} onChange={this.handleChange}/> </label>
                <input type="submit" value="Envoyer" />
            </form>

            <button className="btn btn-primary" onClick={this.rechercher}>Rechercher</button>
            </div>
        );
    }
}
