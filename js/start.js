// createEnemy();
// createAster();

let btnStartGame = document.getElementById('btnStartGame');
let optionsBar = document.querySelector('.game-options');
let playerSkin;

btnStartGame.addEventListener('click', () => {
	let startWindow = document.querySelector('.start-window');
	playerSkin = document.querySelector('.start-window__ships input[type=radio]:checked').value;
	createPlayer(playerSkin);
	backgroundSound.play();
	createEnemy();
	createAster();
	startWindow.style.display = 'none';
	optionsBar.style.visibility = 'visible';
});