# Настройка правил защиты веток на GitHub

Этот документ описывает, как настроить правила защиты веток (branch protection rules) на GitHub для обеспечения качества кода через обязательные ревью PR и прохождение CI.

## Требования

- Права администратора репозитория на GitHub
- Настроенный CI workflow (`.github/workflows/ci.yml`)

## Инструкция по настройке

### Шаг 1: Перейдите в настройки репозитория

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (Настройки)
3. В левом меню выберите **Branches** (Ветки)

### Шаг 2: Добавьте правило защиты для ветки `main`

1. Нажмите **Add rule** (Добавить правило) или **Add branch protection rule**
2. В поле **Branch name pattern** введите: `main`
3. Настройте следующие опции:

#### Обязательные настройки:

- ✅ **Require a pull request before merging**
  - ✅ **Require approvals**: 1 (или больше, по вашему усмотрению)
  - ✅ **Dismiss stale pull request approvals when new commits are pushed**
  - ✅ **Require review from Code Owners** (если используете CODEOWNERS)

- ✅ **Require status checks to pass before merging**
  - ✅ **Require branches to be up to date before merging**
  - В списке статусов выберите:
    - `lint` (Lint)
    - `type-check` (Type Check)
    - `test` (Test)
    - `build` (Build)

- ✅ **Require conversation resolution before merging**

#### Рекомендуемые дополнительные настройки:

- ✅ **Do not allow bypassing the above settings**
- ✅ **Restrict who can push to matching branches** (опционально, для дополнительной безопасности)
- ✅ **Require linear history** (опционально, для чистой истории коммитов)
- ✅ **Include administrators** (применять правила даже к администраторам)

### Шаг 3: Добавьте правило для ветки `develop` (опционально)

Если вы используете ветку `develop` для разработки, повторите шаг 2 с паттерном `develop`.

### Шаг 4: Сохраните настройки

Нажмите **Create** или **Save changes** внизу страницы.

## Результат

После настройки:

1. **Все PR в ветку `main` должны:**
   - Получить минимум 1 одобрение от ревьюера
   - Пройти все проверки CI (lint, type-check, test, build)
   - Иметь разрешенные все комментарии в обсуждениях

2. **Прямые коммиты в `main` будут заблокированы** (если включена опция "Do not allow bypassing")

3. **Статусы CI будут отображаться** на странице PR, и мердж будет заблокирован до их прохождения

## Проверка работы

1. Создайте тестовый PR в ветку `main`
2. Убедитесь, что:
   - CI проверки запускаются автоматически
   - Мердж заблокирован до прохождения всех проверок
   - Мердж заблокирован до получения одобрения

## Альтернативный способ: через GitHub CLI

Если у вас установлен GitHub CLI, вы можете настроить правила через командную строку:

```bash
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["lint","type-check","test","build"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null
```

Замените `:owner` и `:repo` на владельца и название вашего репозитория.

## Дополнительные ресурсы

- [GitHub Documentation: About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Documentation: Requiring status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#require-status-checks-before-merging)
