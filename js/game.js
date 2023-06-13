/** ПЛАН РОЗРОБКИ */
/**
 * 1. Зробити рух гравця по натисканню клавіш "вліво/вправо". done
 * 
 * 2. Зробити вибір космічного корабля гравця та запуск гри:
 * 	- свтворити вікно запуску;
 * 	- створити життя гравця.
 * 
 * 3. Створити "ворогів":
 * 	- рандомний порядок та місце де з'являються "вороги";
 * 	- рух ворогів на гравця;
 * 
 *4. Зробити постріл по натисканню клавіши "пробіл":
 * 	- створити "кулю";
 * 	- зробити рух "кулі";
 * 	- перевірити влучання;
 * 
 * 5. Зробити перевірку на пропущеного ворога (-життя)
 * 
 * 6. Якщо кількість життів == 0 - Game Over.
 */

/** Вивчення та закріплення:
 * 	- створення об'єктів;
 * 	- робота з координатами;
 * 	- події натискання клавіш;
 * 	- робота з таймерами;
 * 	- розділення коду на декілька файлів;
 * 	...
 */
let wrapper = document.querySelector('.container');
let wrapperW = wrapper.offsetWidth;

let player = document.getElementById('player');
let board = document.getElementById('app');

let skin = 'skin-1';

const floor10 = (val) => {
	return Math.floor(val / 10) * 10;
}
wrapperW = floor10(wrapperW);
wrapper.style.width = wrapperW + 'px';

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

const moveLeft = () => {
	let pos = player.offsetLeft;
	if (pos < 29) {
		player.style.left = '0';
	} else {
		player.style.left = pos - 30 + 'px';
	}

}

const moveRight = () => {
	let boardW = board.offsetWidth;
	let playerW = player.offsetWidth;
	let pos = player.offsetLeft;
	if ((pos + playerW + 29) > boardW) {
		player.style.left = (boardW - playerW) + 'px';
	} else {
		player.style.left = pos + 30 + 'px';
	}
}

const shot = () => {
	let bullet = document.createElement('div');
	bullet.className = `bullet ${skin}`;
	bullet.style.left = (player.offsetLeft + player.offsetWidth / 2) - 8 + 'px';
	board.appendChild(bullet);
	let timerID = setInterval(() => {
		let hit = isHit(bullet);
		if (hit || bullet.offsetTop < 0) {
			bullet.remove();
			clearInterval(timerID);
		}
		bullet.style.top = bullet.offsetTop - 20 + 'px';
	}, 50);
}

const isHit = (bullet) => {
	let enemies = document.querySelectorAll('.enemy');
	for (let i = 0; i < enemies.length; i++) {
		enemy = enemies[i];
		if (enemy != null && !enemy.classList.contains('boom')) {
			let vHit = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < (enemy.offsetTop + enemy.offsetHeight);
			let hHit = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < (enemy.offsetLeft + enemy.offsetWidth);
			if (vHit && hHit) {
				enemy.className = 'enemy boom';
				removeEnemy(enemy);
				return true;
			}
		}
	}
	return false;
}

const random = (min, max) => {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}