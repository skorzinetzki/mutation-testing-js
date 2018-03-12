module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      },
      "test/**/test.*.js",
    ],
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "perTest"
  });
};
