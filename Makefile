install:
	npm ci # Устанавливает все указанные зависимости.

brain-games:
	node bin/brain-games.js # Приветствие пользователя.

publish:
	npm publish --dry-run # Общее хранилище с учебными пакетами.

make lint:
	npx eslint . # Запуск проверки ошибок кода.
	
brain-even:
	node bim/brain-even.js # Запуск игры brain-even.

brain-calc:
	node bim/brain-calc.js # Запуск игры brain-calc.