# Инструкция по деплою документации

Этот документ описывает различные способы деплоя приложения `apps/docs`.

## 🚀 Варианты деплоя

### 1. Vercel (Рекомендуется)

Vercel создан командой Next.js и обеспечивает лучшую интеграцию.

#### Шаги:

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите ваш GitHub/GitLab/Bitbucket репозиторий
3. В настройках проекта (Settings → General):
   - **Root Directory**: **ВАЖНО!** Установите в **корень проекта** (`.` или оставьте пустым). **НЕ** устанавливайте `apps/docs`, иначе возникнет ошибка с дублированием путей. Если Vercel автоматически определил `apps/docs`, измените это вручную.
   - **Framework Preset**: Next.js (определится автоматически из vercel.json)
   - **Build Command**: `pnpm turbo run build --filter=@tulx/docs` (уже настроено в vercel.json)
   - **Output Directory**: `apps/docs/.next` (уже настроено в vercel.json)
   - **Install Command**: `pnpm install --frozen-lockfile` (уже настроено в vercel.json)

   **Критически важно**: Root Directory должен быть корнем репозитория (`.`), а не `apps/docs`. Команда `turbo` должна запускаться из корня монорепо. Если Vercel автоматически установил Root Directory как `apps/docs`, это приведет к ошибке сборки.

4. Нажмите "Deploy"

Конфигурация уже создана в `vercel.json` в корне проекта.

#### Переменные окружения (если нужны):

Если у вас есть переменные окружения, добавьте их в настройках проекта Vercel.

---

### 2. Netlify

#### Шаги:

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Подключите ваш репозиторий
3. Настройки:
   - **Base directory**: `apps/docs`
   - **Build command**: `pnpm install && turbo run build --filter=@tulx/docs`
   - **Publish directory**: `apps/docs/.next`

4. Нажмите "Deploy site"

Конфигурация уже создана в `netlify.toml` в корне проекта.

---

### 3. Self-hosted (Собственный сервер)

#### Требования:

- Node.js >= 18.0.0
- pnpm >= 9.0.0

#### Шаги:

```bash
# 1. Клонируйте репозиторий
git clone <your-repo-url>
cd Utilify

# 2. Установите зависимости
pnpm install

# 3. Соберите проект
pnpm build --filter=@tulx/docs

# 4. Запустите production сервер
cd apps/docs
pnpm start
```

Приложение будет доступно на `http://localhost:3000` (по умолчанию).

#### Использование PM2 для production:

```bash
# Установите PM2
npm install -g pm2

# Запустите приложение
cd apps/docs
pm2 start npm --name "docs" -- start

# Сохраните конфигурацию
pm2 save
pm2 startup
```

#### Использование Docker:

Создайте `Dockerfile` в `apps/docs/`:

```dockerfile
FROM node:18-alpine AS base

# Установите pnpm
RUN npm install -g pnpm@9.0.0

FROM base AS deps
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages ./packages
COPY apps/docs ./apps/docs
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build --filter=@tulx/docs

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/docs/.next ./apps/docs/.next
COPY --from=builder /app/apps/docs/package.json ./apps/docs/package.json
COPY --from=builder /app/apps/docs/public ./apps/docs/public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

WORKDIR /app/apps/docs
EXPOSE 3000
ENV PORT 3000

CMD ["pnpm", "start"]
```

---

### 4. Другие платформы

#### Railway

- Подключите репозиторий
- Укажите Root Directory: `apps/docs`
- Build Command: `pnpm install && turbo run build --filter=@tulx/docs`
- Start Command: `cd apps/docs && pnpm start`

#### Render

- Подключите репозиторий
- Укажите Root Directory: `apps/docs`
- Build Command: `pnpm install && turbo run build --filter=@tulx/docs`
- Start Command: `cd apps/docs && pnpm start`

#### Cloudflare Pages

- Подключите репозиторий
- Framework preset: Next.js
- Build command: `pnpm install && turbo run build --filter=@tulx/docs`
- Build output directory: `apps/docs/.next`

---

## 🔧 Локальная сборка для проверки

Перед деплоем проверьте, что сборка работает локально:

```bash
# Из корня проекта
pnpm install
pnpm build --filter=@tulx/docs

# Запустите production сервер
cd apps/docs
pnpm start
```

---

## 📝 Примечания

- Убедитесь, что все зависимости установлены (включая workspace зависимости)
- Turbo автоматически соберет зависимости (`packages/utils` и `packages/config`)
- Next.js автоматически оптимизирует сборку для production
- Для статического экспорта используйте `next export` (если нужно)

---

## ❓ Проблемы

### Ошибка "The file .../apps/docs/apps/docs/.next/routes-manifest.json couldn't be found"

Эта ошибка возникает, когда Vercel автоматически установил **Root Directory** как `apps/docs` вместо корня проекта.

**Решение:**

1. Откройте настройки проекта в Vercel Dashboard
2. Перейдите в раздел **Settings** → **General**
3. Найдите поле **Root Directory**
4. Убедитесь, что оно установлено в **корень проекта** (`.` или пусто, **НЕ** `apps/docs`)
5. Сохраните изменения и перезапустите деплой

Если Root Directory установлен правильно, но ошибка сохраняется:

- Проверьте, что `vercel.json` находится в корне проекта
- Убедитесь, что `outputDirectory` в `vercel.json` указан как `apps/docs/.next`
- В `vercel.json` теперь указан `rootDirectory: "."` для явного указания корня проекта

### Ошибка ESLint "Failed to load config"

Эта ошибка возникает, когда ESLint не может найти конфигурацию из пакета `@tulx/config`.

**Решение:**

- Убедитесь, что пакет `@tulx/config` собран перед использованием (в `turbo.json` lint зависит от build)
- Проверьте, что путь в `.eslintrc.json` использует `./node_modules/@tulx/config/eslint/next.js`
- Убедитесь, что все зависимости установлены: `pnpm install --frozen-lockfile`

### Ошибка "Cannot find module '@tulx/utils'"

Убедитесь, что команда сборки запускается из корня проекта и использует `turbo` или `pnpm --filter`.

### Ошибка сборки в монорепо

Проверьте, что все workspace зависимости правильно настроены в `pnpm-workspace.yaml`.
