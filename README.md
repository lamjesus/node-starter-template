# Node.js Starter Template

A minimal Node.js + TypeScript template for quick development.

## Features

- ⚡ TypeScript support
- 🔄 Hot reload with tsx
- 🚀 Modern ES modules
- 📝 ESLint configuration
- 🌍 Environment variables support (native Node.js)
- 🧹 Auto-clean build directory

## Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment file
cp env.example .env

# Development with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Scripts

- `pnpm dev` - Development with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm clean` - Clean build directory

## Environment Variables

Create a `.env` file based on `env.example`:

```bash
PORT=3000
NODE_ENV=development
```

## Adding Frameworks

### Fastify

```bash
pnpm add fastify
pnpm add -D @types/node
```

### NestJS

```bash
pnpm add @nestjs/core @nestjs/common
pnpm add -D @nestjs/cli
```

### Express (already included)

```bash
pnpm add express
pnpm add -D @types/express
```

## Project Structure

```
src/
├── index.ts          # Entry point
├── config/           # Configuration files
├── routes/           # Route handlers
├── controllers/      # Business logic
├── middleware/       # Custom middleware
└── utils/            # Utility functions
```

## License

ISC
