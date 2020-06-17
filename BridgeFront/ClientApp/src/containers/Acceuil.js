import React, { Component } from 'react';

export class Acceuil extends Component {
    static displayName = Acceuil.name;

  render () {
    return (
      <div>
        <h1>Bienvenu sur Bridges</h1>
        <p>Créer ici des pont entres proffessionnel et consom-acteur</p>
            <p> <a href='/recherche'>rechercher ici</a> </p>
      </div>
    );
  }
}
