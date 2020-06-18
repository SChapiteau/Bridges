import React, { Component } from 'react';

export class EntrepriseListItem extends Component {
    static displayName = EntrepriseListItem.name;

  constructor (props) {
    super(props);
    
    this.state = {
      
    };
  }


  render () {
      return (
          <li>Entreprise : {this.props.e.Nom} - {this.props.e.SIRET}</li>
    );
  }
}
