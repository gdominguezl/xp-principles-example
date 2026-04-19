# TypeScript Template with ESLint, Prettier & Jest

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.32-4B32C3.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.6-F7B93E.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-30.0-C21325.svg)](https://jestjs.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready TypeScript template with integrated linting, formatting, and testing. Perfect for starting new projects or practicing katas in our Software Craftsmanship courses.

## ✨ Features

- **TypeScript 5.8** - Latest TypeScript with strict mode enabled
- **ESLint 9** - Flat config system with TypeScript support
- **Prettier 3.6** - Opinionated code formatter
- **Jest 30** - Delightful JavaScript Testing Framework with coverage thresholds
- **Husky 9** - Git hooks made easy (pre-commit & pre-push)
- **lint-staged** - Run linters on git staged files
- **Strict TypeScript** - Comprehensive type checking for better code quality

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.12
- npm >= 10.5

### Installation

```bash
# Install dependencies
npm install

# Run tests to verify everything works
npm test
```

## 📋 Available Scripts

### Development

```bash
npm run dev              # Watch mode for TypeScript compilation
npm run compile          # Type-check without emitting files
npm run compile:watch    # Type-check in watch mode
```

### Building

```bash
npm run build           # Clean and compile TypeScript to JavaScript
npm run clean           # Remove lib/ and coverage/ directories
```

### Linting & Formatting

```bash
npm run lint            # Run ESLint
npm run lint:fix        # Run ESLint and auto-fix issues
npm run format          # Check formatting with Prettier
npm run format:check    # Verify code formatting
npm run format:fix      # Format code with Prettier
npm run analyze         # Run lint:fix + compile
```

### Testing

```bash
npm test                # Run tests with Jest
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
npm run test:ci         # Run tests in CI mode with coverage
```

### Quality Assurance

```bash
npm run validate        # Run compile + lint + test (full check)
```


## ⚙️ Husky & lint-staged

- **pre-commit**: 
  - Runs ESLint and Prettier on staged TypeScript files (via lint-staged)
  - Runs TypeScript type-checking on the entire project (compile)
  - Blocks commit if there are type errors or unfixable linting issues
- **pre-push**: 
  - Runs full validation (compile + lint + test)
  - Ensures all code is properly typed, linted, and tested before pushing
  

**Happy Coding!** 