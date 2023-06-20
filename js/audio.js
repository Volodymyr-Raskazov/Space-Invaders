let backgroundSound = document.getElementById('backgroundSound');
backgroundSound.currentTime = 10;

let soundControl = document.getElementById('soundControl');

soundControl.addEventListener('click', () => {
	if (backgroundSound.paused == false) {
		backgroundSound.pause();
		soundControl.style.backgroundImage = 'url(img/svg/sound-off-1.svg)';
	} else {
		backgroundSound.play();
		soundControl.style.backgroundImage = 'url(img/svg/sound-on-1.svg)';
	}
});
// console.dir(backgroundSound);