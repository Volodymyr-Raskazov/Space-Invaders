let enemy;
let enemySkin;

const selEnemySkin = () => {
	let n = random(1, 3);
	switch (n) {
		case 1:
			enemySkin = 'skin-1';
			break;
		case 2:
			enemySkin = 'skin-2';
			break;
		case 3:
			enemySkin = 'skin-3';
			break;
	}
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
		enemy.style.top = `${enemy.offsetTop + 5}px`;
		if (enemy.offsetTop > board.offsetHeight) {
			enemy.remove();
			clearInterval(timerID);
		}
	}, 50);
}

// const removeEnemy = (enemy) => {
// 	setTimeout(() => {
// 		enemy.remove();
// 	}, 600);
// }