// createEnemy();
// createAster();
let startWindow = document.querySelector('.start-window');
let btnStartGame = document.getElementById('btnStartGame');
let restartWindow = document.querySelector('.end-window');
let btnRestartGame = document.getElementById('btnRestartGame');
let optionsBar = document.querySelector('.game-options');
let playerSkin;

btnStartGame.addEventListener('click', () => {
	playerSkin = document.querySelector('.start-window__ships input[type=radio]:checked').value;
	backgroundSound.play();
	createPlanet();
	createPlayer(playerSkin);
	lifesCreate();
	createEnemy();
	createAster();
	startWindow.style.display = 'none';
	optionsBar.style.visibility = 'visible';
});

btnRestartGame.addEventListener('click', () => {
	location.reload();
});

const endGame = () => {
	backgroundSound.pause();
	player.style.display = 'none';
	restartWindow.style.display = 'block';
	optionsBar.style.visibility = 'hidden';
}