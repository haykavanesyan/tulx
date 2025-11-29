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

## Versioning

Этот проект использует [Changesets](https://github.com/changesets/changesets) для управления версиями и автоматического создания changelog.

### Создание changeset

При внесении изменений, требующих обновления версии:

```bash
pnpm changeset
```

Выберите пакеты и тип изменения (major/minor/patch), затем опишите изменения.

### Обновление версий

После создания changesets обновите версии:

```bash
pnpm version
```

Эта команда обновит версии пакетов, создаст changelog и обновит зависимости.

### Проверка статуса

Проверьте незавершенные changesets:

```bash
pnpm changeset:status
```

Подробнее см. [.changeset/README.md](.changeset/README.md)

## Tech Stack

- **Monorepo**: Turborepo
- **Package Manager**: pnpm workspaces
- **TypeScript**: Strict mode enabled
- **Documentation**: Next.js App Router

## License

MIT

