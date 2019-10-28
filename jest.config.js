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
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/assetsTransformer.js"
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/*.vue"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/test/e2e"]
};
