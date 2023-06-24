let enemy;
let enemySkin;

const selEnemySkin = () => {
	const skins = ['skin-1', 'skin-2', 'skin-3'];
	enemySkin = skins[Math.floor(Math.random() * skins.length)];
	return enemySkin;
}

const createEnemy = () => {
	let n = random(1, 20);
	selEnemySkin();
	enemy = document.createElement('div');
	enemy.className = `enemy ${enemySkin}`;
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
	let speed = 10;
	if (score >= 100) {
		speed = speed + 5;
	} else if (score >= 200) {
		speed = speed + 10;
	} else if (score >= 300) {
		speed = speed + 15;
	}
	let timerID = setInterval(() => {
		enemy.style.top = enemy.offsetTop + speed + 'px';
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