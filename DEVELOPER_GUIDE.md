# Руководство для разработчиков

Этот документ содержит инструкции для разработчиков по работе с проектом Utilify, включая процесс разработки, версионирование и публикацию пакетов.

## Содержание

- [Структура проекта](#структура-проекта)
- [Настройка окружения](#настройка-окружения)
- [Процесс разработки](#процесс-разработки)
- [Версионирование](#версионирование)
- [Публикация пакетов](#публикация-пакетов)
- [Тестирование](#тестирование)
- [Стиль кода](#стиль-кода)
- [Git workflow](#git-workflow)

## Структура проекта

Проект использует монорепозиторий (monorepo) структуру:

```
Utilify/
├── apps/
│   └── docs/              # Next.js документация сайт
├── packages/
│   ├── config/            # Общие конфигурации (ESLint, TypeScript)
│   └── utils/             # Основная библиотека утилит
├── package.json           # Root package.json
└── pnpm-workspace.yaml    # Конфигурация pnpm workspace
```

### Пакеты

- **@tulx/utils** - Основная библиотека утилит (публикуется в npm)
- **@tulx/config** - Внутренние конфигурации (не публикуется)
- **apps/docs** - Документация сайт (не публикуется)

## Настройка окружения

### Требования

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd Utilify

# Установить зависимости
pnpm install
```

## Процесс разработки

### Создание новой утилиты

1. **Определите категорию** утилиты:
   - `arrays/` - функции для работы с массивами
   - `strings/` - функции для работы со строками
   - `objects/` - функции для работы с объектами
   - `numbers/` - функции для работы с числами
   - `function/` - функции высшего порядка
   - `math/` - математические функции
   - `date/` - функции для работы с датами
   - `util/` - вспомогательные утилиты
   - `lang/` - функции проверки типов
   - `collection/` - функции для коллекций
   - `seq/` - функции для последовательностей

2. **Создайте файлы**:
   ```bash
   # Пример: создание функции chunk
   touch packages/utils/src/arrays/chunk.ts
   touch packages/utils/src/arrays/chunk.test.ts
   ```

3. **Реализуйте функцию**:
   - Функция должна быть чистой (pure function)
   - Полная типизация TypeScript
   - JSDoc комментарии с описанием, параметрами, возвращаемым значением и примерами
   - Следуйте правилам из `.cursor/rules/`

4. **Напишите тесты**:
   - Минимум 90% покрытия кода
   - Тестируйте edge cases (null, undefined, пустые массивы и т.д.)
   - Используйте Vitest

5. **Экспортируйте функцию**:
   - Добавьте экспорт в `packages/utils/src/index.ts`
   - Следуйте структуре категорий

### Пример создания функции

```typescript
// packages/utils/src/arrays/chunk.ts
/**
 * Creates an array of elements split into groups the length of size.
 *
 * @param array - The array to process.
 * @param size - The length of each chunk.
 * @returns Returns the new array of chunks.
 *
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
 * ```
 */
export function chunk<T>(array: readonly T[], size: number = 1): T[][] {
  if (size < 1) {
    return [];
  }
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
```

```typescript
// packages/utils/src/arrays/chunk.test.ts
import { describe, it, expect } from 'vitest';
import { chunk } from './chunk';

describe('chunk', () => {
  it('should split array into chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  it('should handle remainder elements', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  it('should return empty array for size < 1', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  it('should handle empty array', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});
```

### Локальная разработка

```bash
# Запустить тесты в watch режиме
pnpm test

# Запустить линтер
pnpm lint

# Исправить ошибки линтера автоматически
pnpm lint:fix

# Проверить типы
pnpm type-check

# Собрать проект
pnpm build

# Запустить все проверки
pnpm check:all
```

## Версионирование

Проект использует [Semantic Versioning](https://semver.org/) (SemVer):

- **MAJOR** (x.0.0) - Несовместимые изменения API
- **MINOR** (0.x.0) - Новая функциональность с обратной совместимостью
- **PATCH** (0.0.x) - Исправления багов с обратной совместимостью

### Процесс обновления версии

1. **Определите тип изменения**:
   - **PATCH** (0.0.x): Исправление багов, улучшение типизации, исправление документации
   - **MINOR** (0.x.0): Добавление новых функций, новые утилиты
   - **MAJOR** (x.0.0): Удаление функций, изменение сигнатур существующих функций

2. **Обновите версию в package.json**:
   ```bash
   # Откройте packages/utils/package.json
   # Измените поле "version"
   ```

3. **Создайте CHANGELOG запись** (опционально):
   - Документируйте изменения в CHANGELOG.md или README.md

### Примеры версионирования

- **0.0.1 → 0.0.2**: Исправление типизации в функциях (PATCH)
- **0.0.2 → 0.1.0**: Добавление новой категории функций (MINOR)
- **0.1.0 → 1.0.0**: Удаление устаревших функций (MAJOR)

## Публикация пакетов

### Подготовка к публикации

1. **Убедитесь, что все тесты проходят**:
   ```bash
   pnpm test:run
   ```

2. **Проверьте линтер**:
   ```bash
   pnpm lint
   ```

3. **Проверьте типы**:
   ```bash
   pnpm type-check
   ```

4. **Соберите проект**:
   ```bash
   pnpm build
   ```

5. **Проверьте, что версия обновлена**:
   ```bash
   cat packages/utils/package.json | grep version
   ```

### Публикация в npm

1. **Войдите в npm** (если еще не вошли):
   ```bash
   npm login
   ```

2. **Перейдите в директорию пакета**:
   ```bash
   cd packages/utils
   ```

3. **Опубликуйте пакет**:
   ```bash
   npm publish
   ```

   Или с тегом (для pre-release версий):
   ```bash
   npm publish --tag beta
   npm publish --tag alpha
   ```

4. **Проверьте публикацию**:
   ```bash
   npm view @tulx/utils version
   ```

### Автоматизация публикации

Для автоматизации можно использовать скрипт:

```bash
# Из корня проекта
cd packages/utils && npm publish && cd ../..
```

Или добавить скрипт в root package.json:

```json
{
  "scripts": {
    "publish:utils": "cd packages/utils && npm publish && cd ../.."
  }
}
```

## Тестирование

### Запуск тестов

```bash
# Все тесты в watch режиме
pnpm test

# Все тесты один раз
pnpm test:run

# Конкретный тест файл
pnpm test -- chunk.test.ts

# С покрытием
pnpm test:coverage

# UI режим
pnpm test:ui
```

### Требования к тестам

- **Покрытие**: Минимум 90%
- **Edge cases**: Обязательно тестируйте:
  - `null` и `undefined`
  - Пустые массивы/объекты
  - Граничные значения
  - Невалидные входные данные

- **Названия тестов**: Используйте описательные названия:
  ```typescript
  it('should return empty array when size is less than 1', () => {
    // ...
  });
  ```

## Стиль кода

### TypeScript

- Строгий режим (`strict: true`) всегда включен
- Избегайте `any`, используйте `unknown` для небезопасных входных данных
- Все функции должны быть полностью типизированы
- Используйте JSDoc для всех публичных функций

### Функции

- Чистые функции (pure functions) везде, где возможно
- Одна функция = одна ответственность
- Максимум 30-50 строк на функцию
- Именованные экспорты (не default exports)

### Импорты

- В Next.js: абсолютные импорты (`@/components/...`)
- В утилитах: относительные импорты
- Группируйте импорты: внешние → внутренние

### Ошибки

- Выбрасывайте реальные объекты Error
- Предоставляйте полезные сообщения об ошибках

## Git workflow

### Структура коммитов

Используйте [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Типы коммитов

- `feat`: Новая функция или утилита
- `fix`: Исправление бага
- `docs`: Изменения в документации
- `refactor`: Рефакторинг кода
- `test`: Добавление или изменение тестов
- `chore`: Изменения в сборке, конфигурации и т.д.
- `style`: Изменения форматирования (не влияют на код)
- `perf`: Улучшение производительности

### Примеры коммитов

```bash
# Новая функция
git commit -m "feat(arrays): add chunk function"

# Исправление бага
git commit -m "fix(function): correct type constraints for function utilities"

# Обновление версии и публикация
git commit -m "chore(utils): bump version to 0.0.2 and publish"

# Исправление типизации
git commit -m "fix(function): replace unknown[] with any[] in type constraints"
```

### Процесс работы с Git

1. **Создайте ветку** (если работаете в команде):
   ```bash
   git checkout -b feat/new-utility
   ```

2. **Внесите изменения** и закоммитьте:
   ```bash
   git add .
   git commit -m "feat(arrays): add new utility function"
   ```

3. **Перед публикацией**:
   ```bash
   # Убедитесь, что все проверки проходят
   pnpm check:all
   
   # Обновите версию
   # Закоммитьте изменения версии
   git add packages/utils/package.json
   git commit -m "chore(utils): bump version to 0.0.2"
   ```

4. **Опубликуйте пакет** (см. раздел "Публикация пакетов")

5. **Создайте тег** (опционально):
   ```bash
   git tag v0.0.2
   git push origin v0.0.2
   ```

6. **Запушьте изменения**:
   ```bash
   git push origin main
   ```

## Чеклист перед публикацией

- [ ] Все тесты проходят (`pnpm test:run`)
- [ ] Линтер не выдает ошибок (`pnpm lint`)
- [ ] Типы проверены (`pnpm type-check`)
- [ ] Проект успешно собирается (`pnpm build`)
- [ ] Версия обновлена в `package.json`
- [ ] Изменения закоммичены
- [ ] CHANGELOG обновлен (если используется)
- [ ] README актуален (если были изменения API)

## Полезные команды

```bash
# Полная проверка проекта
pnpm check:all

# Исправить все автоматически
pnpm fix:all

# Очистить все build артефакты
pnpm clean

# Форматировать код
pnpm format

# Проверить форматирование
pnpm format:check

# Собрать все пакеты
pnpm build

# Запустить документацию локально
cd apps/docs && pnpm dev
```

## Решение проблем

### Ошибки типизации

Если возникают ошибки типизации при работе с функциями:

1. Проверьте, что используете правильные типы
2. Для функций высшего порядка может потребоваться `any[]` вместо `unknown[]`
3. Используйте `// eslint-disable-next-line @typescript-eslint/no-explicit-any` с комментарием, объясняющим необходимость

### Ошибки сборки

```bash
# Очистите и пересоберите
pnpm clean
pnpm build
```

### Проблемы с зависимостями

```bash
# Переустановите зависимости
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Контакты и поддержка

Для вопросов и предложений создавайте issues в репозитории проекта.

---

**Последнее обновление**: 2024

