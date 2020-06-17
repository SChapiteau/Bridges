import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container } from 'reactstrap';
import { Home } from './containers/Home';
import { FetchData } from './containers/FetchData';
import { Counter } from './containers/Counter';
import { NavMenu } from './components/NavMenu';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
              <NavMenu/>
              <Container>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
              </Container>
          </div>
    );
  }
}
