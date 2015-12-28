'use strict'
require("style!./../stylesheets/main.css");

var React = require('react')
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello')

ReactDOM.render(<Hello />, document.getElementById('main'))
