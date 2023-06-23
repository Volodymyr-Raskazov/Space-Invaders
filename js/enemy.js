let enemy;
let enemySkin;

const selEnemySkin = () => {
	const skins = ['skin-1', 'skin-2', 'skin-3'];
	enemySkin = skins[Math.floor(Math.random() * skins.length)];
	return enemySkin;
}

const createEnemy = () => {
	let n = random(1, 10);
	selEnemySkin();
	enemy = document.createElement('div');
	enemy.className = `enemy ${enemySkin}`;
	board.appendChild(enemy);
	enemy.style.left = `${random(100, (board.offsetWidth - 100))}px`;
	moveEnemy(enemy);
	if (n < 2) {
		for (let i = 0; i < random(1, 2); i++) {
			selEnemySkin();
			enemy = document.createElement('div');
			enemy.className = `enemy ${enemySkin}`;
			board.appendChild(enemy);
			enemy.style.left = `${random(100, (board.offsetWidth - 100))}px`;
			moveEnemy(enemy);
		}
	}
}

const moveEnemy = (enemy) => {
	let timerID = setInterval(() => {
		enemy.style.top = `${enemy.offsetTop + 10}px`;
		if (enemy.offsetTop > board.offsetHeight) {
			removeEnemy(enemy);
			clearInterval(timerID);
			lifeMinus();
		}
	}, 75);
}

const removeEnemy = (enemy) => {
	setTimeout(() => {
		if (lifesPlayer <= 0) {
			removeAll();
		} else {
			enemy.remove();
			createEnemy();
		}
	}, 600);
}