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

'use strict'


let playerShip = document.getElementById('player');
let gameBoard = document.querySelector('.container');
let screenW = document.getElementById('app').offsetWidth;
let playerW = player.offsetWidth;

const floor10 = (val) => {
	return Math.floor(val / 10) * 10;
}

screenW = floor10(screenW);
gameBoard.style.width = `${screenW}px`;

document.addEventListener('keydown', (event) => {
	if (event.code == "ArrowLeft" || event.code == "KeyA") {
		moveLeft();
	} else if (event.code == "ArrowRight" || event.code == "KeyD") {
		moveRight();
	}
});

const moveLeft = () => {
	let pos = playerShip.offsetLeft;
	if (pos > 45) {
		pos = pos -= 50;
		playerShip.style.left = `${pos}px`;
	}
}

const moveRight = () => {
	let pos = playerShip.offsetLeft;
	if (pos < (screenW - (playerW + playerW / 2))) {
		pos = pos += 50;
		playerShip.style.left = `${pos}px`;
	}
}
