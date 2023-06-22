let backgroundSound = document.getElementById('backgroundSound');
backgroundSound.currentTime = 25;
backgroundSound.volume = 0.3;
let soundControl = document.querySelector('.game-options__sound')
let soundOn = document.getElementById('soundOn');
let soundOff = document.getElementById('soundOff');
let muted;

soundControl.addEventListener('click', () => {
	if (backgroundSound.paused == false) {
		backgroundSound.pause();
		soundOff.classList.remove('hidden');
		soundOn.classList.add('hidden');
		muted = true;
	} else {
		backgroundSound.play();
		soundOn.classList.remove('hidden');
		soundOff.classList.add('hidden');
		muted = false;
	}
});

const playSound = (soundFile, volume, muted) => {
	let sound = new Audio(soundFile);
	sound.volume = volume;
	sound.muted = muted;
	sound.play();
}

// playSound('sound/background.mp3', 0.5, muted);
// playSound('sound/shot.mp3', 0.2, muted);
// playSound('sound/boom.mp3', 0.2, muted);
// console.dir(backgroundSound);