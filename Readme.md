# XP Principles Example

A TypeScript starter for practicing **Extreme Programming** and **TDD**.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-30.0-C21325.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-9.32-4B32C3.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.6-F7B93E.svg)](https://prettier.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Stack

- **TypeScript 5.8** (strict mode)
- **Jest 30** with coverage thresholds
- **ESLint 9** (flat config) + **Prettier 3.6**
- **Husky + lint-staged** git hooks

## Getting started

Prerequisites: Node.js `>= 20.12`, npm `>= 10.5`.

```bash
npm install
npm test
```

## Scripts

**Develop**
```bash
npm run dev              # tsc watch
npm run compile          # type-check only
```

**Test**
```bash
npm test                 # run all tests
npm run test:watch       # watch mode
npm run test:coverage    # with coverage report
```

**Lint & format**
```bash
npm run lint             # ESLint
npm run lint:fix         # ESLint with auto-fix
npm run format:fix       # Prettier
```

**Build & validate**
```bash
npm run build            # clean + compile to lib/
npm run validate         # compile + lint + test (full check)
```

## Git hooks

- **pre-commit** — ESLint + Prettier on staged files, full TypeScript type-check.
- **pre-push** — full `validate` (compile + lint + test). Push is blocked on any failure.
