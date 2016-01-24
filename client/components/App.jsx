'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Navigation from './Navigation.jsx';
import Piano from './Piano.jsx';

import { componentLogger } from '../utils/componentLogger';

const componentName = 'App';

class App extends Component {
  componentWillMount() {
    componentLogger(componentName, 'componentcomponentWillMount');
  }

  componentDidMount() {
    componentLogger(componentName, 'componentDidMount');
  }

  componentWillUnmount() {
    componentLogger(componentName, 'componentWillUnmount');
  }

  render() {
    return (
      <section id="app-wrap">
        <Navigation />
        <Piano />
      </section>
    )
  }
}

export default App;
