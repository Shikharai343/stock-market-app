module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
    'text-lcov',
    'lcov',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  modulePaths: [
    '<rootDir>',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community/async-storage/lib)',
  ],
  setupFiles: [
    './jest.setup.ts',
  ],
};
