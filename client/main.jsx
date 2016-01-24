'use strict';

import 'styles/main.scss';
import  'bootstrap/less/bootstrap.less';

import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';

render(<App />, document.getElementById('js-main'));
