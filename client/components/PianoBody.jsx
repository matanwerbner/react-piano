'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import PianoKeys from './PianoKeys.jsx';

import { componentLogger } from '../utils/componentLogger';

const componentName = 'PianoBody';

class PianoBody extends Component {
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
      <section className="piano-body" id="piano-body">
        <PianoKeys />
      </section>
    )
  }
}

export default PianoBody;
