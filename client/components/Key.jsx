'use strict';

import React, { Component } from 'react';
import ReactDOM, { render, findDOMNode } from 'react-dom';
import $ from 'jquery';

import Oscillator from '../utils/Oscillator.jsx';
import { componentLogger } from '../utils/componentLogger';

const componentName = 'Key';

class Key extends Component {
  constructor() {
    super();

    this.longClickTimer;
    this.state = {keyCode : null }; // init state
    this.clickHeld = false;
    this.Oscillator = new Oscillator();
    this.play = this.play.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.setKey = this.setKey.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  play() {
    this.$node.addClass('active');
    this.Oscillator.play(this.props.frequency);
    setTimeout(() => { this.$node.removeClass('active') }, 200);
  }

  mouseDown() {
    this.longClickTimer = window.setTimeout(() => this.clickHeld = true, 500);
  }

  mouseUp() {
    this.clickHeld = false;
    clearTimeout(this.longClickTimer);
  }

  setKey(code) {
    this.setState({'keyCode': code});
  }

  setEventListeners() {
    $(document).on('keypress', (e) => {
      let code = e.charCode,
        appliedCode = this.state.keyCode,
        anticipatedKey = (appliedCode && appliedCode === code);

      if (anticipatedKey) {
        this.play();
      } else if (this.clickHeld) {
        this.setKey(code);
      }
    });
  }

  componentWillMount() {
    componentLogger(componentName, 'componentcomponentWillMount');
  }

  componentDidMount() {
    componentLogger(componentName, 'componentDidMount');
    this.$node = $(ReactDOM.findDOMNode(this));
    this.setEventListeners();
  }

  componentWillUnmount() {
    $(document).off('keypress');
    componentLogger(componentName, 'componentWillUnmount');
  }

  render() {
    return (
      <div onMouseUp={this.mouseUp} onMouseDown={this.mouseDown} onClick={this.play} className={this.props.type}></div>
    )
  }
}

Key.propTypes = {
  frequency: React.PropTypes.number,
  type: React.PropTypes.string
};

export default Key;
