module.exports = {
  // Use ts-jest preset for TypeScript support
  preset: "ts-jest",

  // Set the test environment
  testEnvironment: "node",

  // Test file patterns
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],

  // File extensions to consider
  moduleFileExtensions: ["ts", "js", "json"],

  // Transform configuration
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        // TypeScript compiler options for Jest
        tsconfig: {
          // Enable esModuleInterop to handle CommonJS/ES module compatibility
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          // Use CommonJS modules for Jest
          module: "commonjs",
          target: "es2020",
          strict: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
        },
      },
    ],
  },

  // Module name mapping (if needed for path aliases)
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Coverage configuration
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/*.test.ts"],

  // Setup files (if needed)
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Clear mocks between tests
  clearMocks: true,

  // Verbose output
  verbose: true,
};
