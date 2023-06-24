let board = document.getElementById('app');
let player = null;
let lifesPlayer = 5;
let score = 0;

document.addEventListener('keydown', (ev) => {
	switch (ev.code) {
		case "Space":
			shot();
			break;
		case "ArrowLeft":
		case "KeyA":
			moveLeft();
			break;
		case "ArrowRight":
		case "KeyD":
			moveRight();
			break;
	}
});

const createPlayer = (playerSkin) => {
	player = document.createElement('div');
	player.id = 'player';
	player.className = playerSkin;
	board.appendChild(player);
}

const moveLeft = () => {
	let pos = player.offsetLeft;
	player.style.left = pos <= 49 ? '0' : pos - 50 + 'px';
}

const moveRight = () => {
	let boardW = board.offsetWidth;
	let playerW = player.offsetWidth;
	let pos = player.offsetLeft;
	player.style.left = (pos + playerW + 49) > boardW ? (boardW - playerW) + 'px' : pos + 50 + 'px';
}

const shot = () => {
	playerSkin = document.getElementById('player').className;
	let bullet = document.createElement('div');
	let bulletLeft = document.createElement('div');
	let bulletRight = document.createElement('div');
	bullet.className = `bullet ${playerSkin}`;
	bulletLeft.className = `bullet ${playerSkin} left`;
	bulletRight.className = `bullet ${playerSkin} right`;
	bullet.style.left = (player.offsetLeft + player.offsetWidth / 2) - 2 + 'px';
	bulletLeft.style.left = (player.offsetLeft + player.offsetWidth / 2) - 22 + 'px';
	bulletRight.style.left = (player.offsetLeft + player.offsetWidth / 2) + 18 + 'px';
	if (playerSkin == 'skin-1') {
		playSound('sound/shot.mp3', 0.1, muted);
		board.appendChild(bullet);
	} else {
		playSound('sound/shot.mp3', 0.1, muted);
		board.appendChild(bulletLeft);
		board.appendChild(bulletRight);
	}
	let timerID = setInterval(() => {
		let hit = isHit(bullet, bulletLeft, bulletRight);
		if (hit || bullet.offsetTop < 0 || bulletLeft.offsetTop < 0 || bulletRight.offsetTop < 0) {
			bullet.remove();
			bulletLeft.remove();
			bulletRight.remove();
			clearInterval(timerID);
		}
		bullet.style.top = bullet.offsetTop - 50 + 'px';
		bulletLeft.style.top = bulletLeft.offsetTop - 50 + 'px';
		bulletRight.style.top = bulletRight.offsetTop - 50 + 'px';
	}, 50);
}

const isHit = (bullet, bulletLeft, bulletRight) => {
	let targets = document.querySelectorAll('.enemy, .asteroid, .bonus-life, .bonus-boom');
	let target;
	for (let i = 0; i < targets.length; i++) {
		target = targets[i];
		if (target != null && !target.classList.contains('boom')) {
			let vHit = bullet.offsetTop > target.offsetTop && bullet.offsetTop < (target.offsetTop + target.offsetHeight);
			let vHitLeft = bulletLeft.offsetTop > target.offsetTop && bulletLeft.offsetTop < (target.offsetTop + target.offsetHeight);
			let vHitRight = bulletRight.offsetTop > target.offsetTop && bulletRight.offsetTop < (target.offsetTop + target.offsetHeight);
			let hHit = bullet.offsetLeft > target.offsetLeft && bullet.offsetLeft < (target.offsetLeft + target.offsetWidth);
			let hHitLeft = bulletLeft.offsetLeft > target.offsetLeft && bulletLeft.offsetLeft < (target.offsetLeft + target.offsetWidth);
			let hHitRight = bulletRight.offsetLeft > target.offsetLeft && bulletRight.offsetLeft < (target.offsetLeft + target.offsetWidth);
			if (vHit && hHit || vHitLeft && hHitLeft || vHitRight && hHitRight) {
				target.classList.add('boom');
				let enemyCount;
				let asterCount;
				switch (true) {
					case target.classList.contains('enemy') && (!target.classList.contains('bonus-life') || !target.classList.contains('bonus-boom')):
						playSound('sound/boom.mp3', 0.1, muted);
						score = score + 10;
						scoreCount();
						removeTarget(target);
						createEnemy();
						break;
					case target.classList.contains('asteroid') && (!target.classList.contains('bonus-life') || !target.classList.contains('bonus-boom')):
						playSound('sound/boom.mp3', 0.1, muted);
						score = score + 5;
						scoreCount();
						removeTarget(target);
						createAster();
						break;
					case target.classList.contains('enemy') && target.classList.contains('bonus-life'):
						target.classList.remove('boom');
						target.classList.remove('enemy');
						playSound('sound/boom.mp3', 0.1, muted);
						lifesPlayer = lifesPlayer++;
						lifesCreate();
						removeTarget(target);
						break;
					case target.classList.contains('asteroid') && target.classList.contains('bonus-life'):
						target.classList.remove('boom');
						target.classList.remove('asteroid');
						playSound('sound/boom.mp3', 0.1, muted);
						lifesPlayer = lifesPlayer++;
						lifesCreate();
						removeTarget(target);
						break;
					case target.classList.contains('enemy') && target.classList.contains('bonus-boom'):
						target.classList.remove('boom');
						target.classList.remove('enemy');
						playSound('sound/boom.mp3', 0.1, muted);
						enemyCount = document.querySelectorAll('.enemy');
						asterCount = document.querySelectorAll('.asteroid');
						score = score + enemyCount.length + asterCount.length;
						scoreCount();
						removeTarget(target);
						break;
					case target.classList.contains('asteroid') && target.classList.contains('bonus-boom'):
						target.classList.remove('boom');
						target.classList.remove('enemy');
						playSound('sound/boom.mp3', 0.1, muted);
						enemyCount = document.querySelectorAll('.enemy');
						asterCount = document.querySelectorAll('.asteroid');
						score = score + enemyCount.length + asterCount.length;
						scoreCount();
						removeTarget(target);
						break;
				}
				// if (target.classList.contains('enemy')) {
				// 	playSound('sound/boom.mp3', 0.1, muted);
				// 	score = score + 10;
				// 	scoreCount();
				// 	removeTarget(target);
				// 	createEnemy();
				// } else {
				// 	playSound('sound/boom.mp3', 0.1, muted);
				// 	score = score + 5;
				// 	scoreCount();
				// 	removeTarget(target);
				// 	createAster();
				// }
				return true;
			}
		}
	}
	return false;
}

const removeTarget = (target) => {
	setTimeout(() => {
		target.remove();
	}, 600);
}

const removeAll = () => {
	let targets = document.querySelectorAll('.enemy, .asteroid, .planet');
	let bullets = document.querySelectorAll('.bullet');
	bullets.forEach((el) => {
		el.remove();
	});
	targets.forEach((el) => {
		el.classList.add('boom');
		setTimeout(() => {
			el.remove();
		}, 600);
	});
}


const lifeMinus = () => {
	lifesPlayer--;
	if (lifesPlayer <= 0) {
		removeAll();
		endGame();
	}
	lifesCreate();
}

const lifesCreate = () => {
	let lifesBlock = document.getElementById('lifes');
	lifesBlock.innerHTML = '';
	for (let i = 0; i < lifesPlayer; i++) {
		let span = document.createElement('span');
		lifesBlock.appendChild(span);
	}
}

const scoreCount = () => {
	let scoreBlock = document.querySelector('.game-options__score span');
	scoreBlock.innerText = score;
}