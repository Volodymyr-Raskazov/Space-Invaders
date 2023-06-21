let backgroundSound = document.getElementById('backgroundSound');
backgroundSound.currentTime = 15;
let soundControl = document.querySelector('.game-options__sound')
let soundOn = document.getElementById('soundOn');
let soundOff = document.getElementById('soundOff');
let muted;
// let shotSound = document.getElementById('shotSound');
// let boomSound = document.getElementById('boomSound');

soundControl.addEventListener('click', () => {
	if (backgroundSound.paused == false) {
		backgroundSound.pause();
		soundOff.classList.remove('hiden');
		soundOn.classList.add('hiden');
		muted = true;
	} else {
		backgroundSound.play();
		soundOn.classList.remove('hiden');
		soundOff.classList.add('hiden');
		muted = false;
	}
});

const bgSound = () => {
	backgroundSound.volume = 0.5;
	backgroundSound.play();
}

const shotSound = () => {
	let sound = new Audio('sound/shot.mp3');
	sound.volume = 0.2;
	sound.muted = muted;
	sound.play();
}

const boomSound = () => {
	let sound = new Audio('sound/boom.mp3');
	sound.volume = 0.2;
	sound.muted = muted;
	sound.play();
}
// console.dir(backgroundSound);