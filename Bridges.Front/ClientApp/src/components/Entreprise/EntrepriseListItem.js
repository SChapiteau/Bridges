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
          <li key={this.props.e.siret} >Entreprise : {this.props.e.nom} - {this.props.e.siret}</li>
    );
  }
}
