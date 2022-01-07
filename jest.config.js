module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/*.stories.{ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  }
};