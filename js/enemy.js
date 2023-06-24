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
	let bonus;
	let b = random(1, 20);
	switch (b) {
		case 1:
			bonus = 'bonus-life';
			break;
		case 2:
			bonus = 'bonus-boom';
			break;
	}
	enemy.className = `enemy ${enemySkin} ${bonus}`;
	board.appendChild(enemy);
	enemy.style.left = `${random(200, (board.offsetWidth - 200))}px`;
	moveEnemy(enemy);
	if (n <= 2) {
		let i = 0;
		while (i < 1) {
			selEnemySkin();
			enemy = document.createElement('div');
			enemy.className = `enemy ${enemySkin}`;
			board.appendChild(enemy);
			enemy.style.left = `${random(200, (board.offsetWidth - 200))}px`;
			moveEnemy(enemy);
			i++;
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
	}, 200);
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