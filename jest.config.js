module.exports = {
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ["js", "json", "vue"],
  watchman: false,
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/*.vue"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
