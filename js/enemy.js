let enemy = '';

const createEnemy = () => {
	let posEnemy = random(50, board.offsetWidth);
	enemy = document.createElement('div');
	enemy.className = 'enemy skin-1'
	enemy.style.left = `${posEnemy - (enemy.offsetWidth + 50)}px`;
	board.appendChild(enemy);
	moveEnemy(enemy);
}

const moveEnemy = (enemy) => {
	let timerID = setInterval(() => {
		enemy.style.top = `${enemy.offsetTop + 10}px`;
		if (enemy.offsetTop > board.offsetHeight) {
			enemy.remove();
			clearInterval(timerID);
		}
	}, 50)
}