install:
		npm ci # Устанавливает все указанные зависимости.

brain-games:
		node bin/brain-games.js # Запуск игры без глобальной установки.

publish:
		npm publish --dry-run # --dry-run, чтобы не засорять общее хранилище учебными пакетами.

make lint:
		npx eslint . # Запуск проверки ошибок кода.