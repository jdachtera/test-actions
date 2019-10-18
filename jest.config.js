module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js"],
  testRegex: "^.+\\.test\\.ts$",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results/jest/junit.xml"
      }
    ]
  ]
};
