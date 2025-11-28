# Utilify

Utility library with documentation website - Monorepo powered by Turborepo and pnpm.

## Structure

```
.
├── apps/
│   └── docs/          # Next.js documentation website
├── packages/
│   ├── utils/         # Utility function library
│   └── config/        # Shared TS/ESLint configs
└── package.json       # Root package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
pnpm install
```

### Development

```bash
# Run all apps and packages in development mode
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Run tests
pnpm test

# Type check
pnpm type-check
```

## Tech Stack

- **Monorepo**: Turborepo
- **Package Manager**: pnpm workspaces
- **TypeScript**: Strict mode enabled
- **Documentation**: Next.js App Router

## License

MIT

