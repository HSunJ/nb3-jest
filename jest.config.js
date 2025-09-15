const config = {
	testEnvironment: "node",   // Default: "node"
	verbose: true,
	testMatch: ["**/*.test.ts"], // Default: [ "**/__tests__/**/*.?([mc])[jt]s?(x)", "**/?(*.)+(spec|test).?([mc])[jt]s?(x)" ]
	transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ["js", "ts"], // Default: ["js", "mjs", "cjs", "jsx", "ts", "mts", "cts", "tsx", "json", "node"]
	collectCoverage: true,
	coverageReporters: [
		"text",
    "lcov",
    "json-summary"
  ],
}

export default config;