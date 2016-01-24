'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Key from './Key.jsx';
import frequencyMap from '../utils/frequencyMap.jsx';
import keyTypeSelector from '../utils/keyTypeSelector.jsx';

import { componentLogger } from '../utils/componentLogger';

const componentName = 'PianoKeys';

class PianoKeys extends Component {
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
      <div className="piano-keys-container" id="piano-keys">
        {[...Array(88)].map((x, i) => <Key type={keyTypeSelector(i + 1)} frequency={frequencyMap[i + 1]} />)}
      </div>
    )
  }
}

export default PianoKeys;
