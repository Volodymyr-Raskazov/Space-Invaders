let board = document.getElementById('app');
let player = null;

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
	if (pos < 39) {
		player.style.left = '0';
	} else {
		player.style.left = pos - 40 + 'px';
	}

}

const moveRight = () => {
	let boardW = board.offsetWidth;
	let playerW = player.offsetWidth;
	let pos = player.offsetLeft;
	if ((pos + playerW + 39) > boardW) {
		player.style.left = (boardW - playerW) + 'px';
	} else {
		player.style.left = pos + 40 + 'px';
	}
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
		board.appendChild(bullet);
	} else {
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
		bullet.style.top = bullet.offsetTop - 20 + 'px';
		bulletLeft.style.top = bulletLeft.offsetTop - 20 + 'px';
		bulletRight.style.top = bulletRight.offsetTop - 20 + 'px';
	}, 50);
}

const isHit = (bullet, bulletLeft, bulletRight) => {
	let targets = document.querySelectorAll('.enemy, .asteroid');
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
				if (target.classList.contains('enemy')) {
					removeTarget(target);
					createEnemy();
				} else {
					removeTarget(target);
					createAster();
				}
				return true;
			}
		}
	}
	return false;
}
