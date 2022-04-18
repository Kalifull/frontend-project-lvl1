install:
	npm ci # Устанавливает все указанные зависимости.

brain-games:
	node bin/brain-games.js # Приветствие пользователя.

publish:
	npm publish --dry-run # Общее хранилище с учебными пакетами.

make lint:
	npx eslint . # Запуск проверки ошибок кода.

brain-even:
	node bin/brain-even.js # Запуск игры brain-even.

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js
