let backgroundSound = document.getElementById('backgroundSound');
backgroundSound.currentTime = 10;
let soundControl = document.getElementById('soundControl');
// let shotSound = document.getElementById('shotSound');
// let boomSound = document.getElementById('boomSound');

soundControl.addEventListener('click', () => {
	if (backgroundSound.paused == false) {
		backgroundSound.pause();
		soundControl.style.backgroundImage = 'url(img/svg/sound-off-1.svg)';
	} else {
		backgroundSound.play();
		soundControl.style.backgroundImage = 'url(img/svg/sound-on-1.svg)';
	}
});

const bgSound = () => {
	backgroundSound.volume = 0.5;
	backgroundSound.play();
}

const shotSound = () => {
	let shotS = new Audio('sound/shot.mp3')
	shotS.play();
}

const boomSound = () => {
	let boomS = new Audio('sound/boom.mp3')
	boomS.play();
}
// console.dir(backgroundSound);