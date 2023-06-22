let enemy;
let enemySkin;

const selEnemySkin = () => {
	const skins = ['skin-1', 'skin-2', 'skin-3'];
	enemySkin = skins[Math.floor(Math.random() * skins.length)];
	return enemySkin;
}

const createEnemy = () => {
	let enemyPosition = random(100, (board.offsetWidth - 100));
	selEnemySkin();
	enemy = document.createElement('div');
	enemy.className = `enemy ${enemySkin}`;
	enemy.style.left = `${enemyPosition}px`;
	board.appendChild(enemy);
	moveEnemy(enemy);
}

const moveEnemy = (enemy) => {
	let timerID = setInterval(() => {
		enemy.style.top = `${enemy.offsetTop + 12.5}px`;
		if (enemy.offsetTop > board.offsetHeight) {
			removeEnemy(enemy);
			clearInterval(timerID);
			lifeMinus();
		}
	}, 50);
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