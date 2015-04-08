/*globals blanket */

var options = {
   modulePrefix: "todomvc-ember-cli",
   filter: "//.*todomvc-ember-cli/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true,
   cliOptions: {
    outputFile: 'test-output.json',
    reporters: ['json']
  }

};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
