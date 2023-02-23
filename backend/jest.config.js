module.exports = {
    testEnvironment: 'node',
    transform: {
      "^.+\\.ts$": "ts-jest"
    },
    testRegex: '.spec.ts$',
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    moduleFileExtensions: [
        'js',
        'json',
        'ts'
    ]
  };
