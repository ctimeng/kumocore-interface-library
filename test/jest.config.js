module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'cjs'],
  roots: ['<rootDir>/test'],
  rootDir: '../',
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  testTimeout: 50000,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
};
