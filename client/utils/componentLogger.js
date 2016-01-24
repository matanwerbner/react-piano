'use strict';

const log = (message) => {
  if (console && console.log) {
    console.log(message);
  }
};

const componentLogger = (componentName, method) => {
  log('[' + componentName + ']' + ' component says: ' + method + ' was called');
};

export { componentLogger };
