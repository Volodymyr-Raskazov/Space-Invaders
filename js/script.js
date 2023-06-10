/** ПЛАН РОЗРОБКИ */
/**
 * 1. Зробити рух гравця по натисканню клавіш "вліво/вправо".
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

let screenW = document.getElementById('app').offsetWidth;
let player = document.getElementById('player');
// player.style.left = `calc(${screenW}px / 2 - 47px)`;


document.onclick = () => {
	// moveLeft();
	moveRight();
}

const moveLeft = () => {
	let pos = player.offsetLeft;
	pos = pos -= 5;
	player.style.left = `${pos}px`;
}

const moveRight = () => {
	let pos = player.offsetLeft;
	if (pos < screenW - 135) {
		pos = pos += 4 5;
		player.style.left = `${pos}px`;
	}
	// } else {
	// 	pos = pos;
	// }

}
