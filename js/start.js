// createEnemy();
// createAster();

let btnStartGame = document.getElementById('btnStartGame');
let playerSkin;

btnStartGame.addEventListener('click', () => {
	let startWindow = document.querySelector('.start-window');
	playerSkin = document.querySelector('.start-window__ships input[type=radio]:checked').value;
	createPlayer(playerSkin);
	createEnemy();
	createAster();
	startWindow.style.display = 'none';
});