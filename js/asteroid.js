let aster;

const createAster = () => {
	let n = random(1, 20);
	aster = document.createElement('div');
	aster.className = `asteroid`;
	aster.style.left = `${random(200, (board.offsetWidth - 200))}px`;
	board.appendChild(aster);
	moveAster(aster);
	if (n <= 2) {
		let i = 0;
		while (i < 1) {
			aster = document.createElement('div');
			aster.className = 'asteroid';
			aster.style.left = `${random(200, (board.offsetWidth - 200))}px`;
			board.appendChild(aster);
			moveAster(aster);
			i++;
		}
	}
}

const moveAster = (aster) => {
	let speed = 10;
	if (score >= 100) {
		speed = speed + 5;
	} else if (score >= 200) {
		speed = speed + 10;
	} else if (score >= 300) {
		speed = speed + 15;
	}
	let rotation = 5;
	let timerID = setInterval(() => {
		rotation = rotation += 5;
		aster.style.transform = `rotate(${rotation}deg)`;
		aster.style.top = aster.offsetTop + speed + 'px';
		if (aster.offsetTop > board.offsetHeight) {
			removeAster(aster);
			clearInterval(timerID);
			lifeMinus();
		}
	}, 200);
}

const removeAster = (aster) => {
	setTimeout(() => {
		if (lifesPlayer <= 0) {
			removeAll();
		} else {
			aster.remove();
			createAster();
		}
	}, 600);
}