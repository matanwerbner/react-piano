'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Panel, Row, Col } from 'react-bootstrap';
import PianoBody from './PianoBody.jsx';

import { componentLogger } from '../utils/componentLogger';

const componentName = 'Piano';
const pianoContainerHeader = 'Oscillator Piano';

class Piano extends Component {
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
      <Grid>
        <Row>
          <Col xs={18} md={12}>
            <Panel header={pianoContainerHeader} id="piano-container">
              <PianoBody />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Piano;
