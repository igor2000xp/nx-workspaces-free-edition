# Technical Context

## Development Environment
- Node.js ≥ 22.0.0
- npm ≥ 10.0.0
- TypeScript 5.7.2
- ESLint 9.17.0
- Prettier 3.4.2

## Core Dependencies
### Production
- express: ^4.21.2 - Web application framework

### Development
- TypeScript Stack:
  - typescript: ^5.7.2
  - tslib: ^2.8.1
  - ts-node: ^10.9.2
  - @types/node: ^22.10.5
  - @types/express: ^5.0.0

- Testing:
  - jest: ^29.7.0
  - ts-jest: ^29.2.5
  - @types/jest: ^29.5.14

- Code Quality:
  - eslint: ^9.17.0
  - @eslint/js: ^9.17.0
  - eslint-config-prettier: ^9.1.0
  - prettier: ^3.4.2
  - typescript-eslint: ^8.19.1

## Build and Development Scripts
- `npm run build` - Compile TypeScript
- `npm run serve` - Run the server
- `npm test` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure
- `/src` - Source code directory
- `/memory-bank` - Project documentation and context
- Configuration files:
  - `tsconfig.json` - TypeScript configuration
  - `jest.config.ts` - Jest testing configuration
  - `.prettierrc` - Prettier formatting rules
  - `eslint.config.cjs` - ESLint rules
