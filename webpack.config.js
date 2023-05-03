'use strict';

const clientConfig = require('./client/webpack.config');
const serverConfig = require('./server/webpack.config');
const debuggerConfig = require('./debugger/webpack.config');

module.exports = [clientConfig, serverConfig, debuggerConfig];
