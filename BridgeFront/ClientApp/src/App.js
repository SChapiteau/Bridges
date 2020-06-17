import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container } from 'reactstrap';
import { Acceuil } from './containers/Acceuil';
import { Recherche } from './containers/Recherche';
import { FetchData } from './containers/FetchData';
import { NavMenu } from './components/NavMenu';


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
              <NavMenu/>
              <Container>
                  <Route exact path='/' component={Acceuil} />
                  <Route path='/Recherche' component={Recherche} />
                <Route path='/fetch-data' component={FetchData} />
              </Container>
          </div>
    );
  }
}
