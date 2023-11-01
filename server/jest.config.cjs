module.exports = {
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "cjs"],
};
