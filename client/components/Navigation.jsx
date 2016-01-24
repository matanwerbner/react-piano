'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { componentLogger } from '../utils/componentLogger';

const componentName = 'Navigation';

class Navigation extends Component {
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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <b>Hawk Pianos</b>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Navigation;
