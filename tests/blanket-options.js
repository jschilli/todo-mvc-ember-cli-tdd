/* globals blanket */

blanket.options({
   modulePrefix: "todomvc-ember-cli",
   filter: "//.*todomvc-ember-cli/.*/",
   antifilter: "//.*(tests|template).*/",
   loaderExclusions: [],
   enableCoverage: true
});