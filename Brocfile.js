/* jshint node: true */
"use strict";

var build = require('@glimmer/build');

// const buildVendorPackage = require('@glimmer/build/lib/build-vendor-package');
const funnel = require('broccoli-funnel');
const path = require('path');

let buildOptions = {};

module.exports = build(buildOptions);

/*
var multiBuilder = require('broccoli-multi-builder');
var mergeTrees = require('broccoli-merge-trees');
var testBuilder = require('broccoli-test-builder');
var Funnel = require('broccoli-funnel');

var options = {
  packageName: 'mobiledoc-dom-renderer'
};

var simpleDOMTree = new Funnel('node_modules/simple-dom/dist/', {
  include: ['simple-dom.js'],
  destDir: 'tests'
});

module.exports = mergeTrees([
  multiBuilder.build('amd', options),
  multiBuilder.build('global', options),
  multiBuilder.build('commonjs', options),
  testBuilder.build(),
  simpleDOMTree
]);
*/
