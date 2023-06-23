let aster;

const createAster = () => {
	let i = 0;
	while (i < random(1, 2)) {
		aster = document.createElement('div');
		aster.className = 'asteroid';
		aster.style.left = `${random(100, (board.offsetWidth - 100))}px`;
		board.appendChild(aster);
		moveAster(aster);
		i++;
	}
}

const moveAster = (aster) => {
	let rotation = 5;
	let timerID = setInterval(() => {
		rotation = rotation += 5;
		aster.style.transform = `rotate(${rotation}deg)`;
		aster.style.top = `${aster.offsetTop + 10}px`;
		if (aster.offsetTop > board.offsetHeight) {
			removeAster(aster);
			clearInterval(timerID);
			lifeMinus();
		}
	}, 75);
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