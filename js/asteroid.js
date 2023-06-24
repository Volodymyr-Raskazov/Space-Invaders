let aster;

const createAster = () => {
	let n = random(1, 10);
	aster = document.createElement('div');
	let bonus;
	let b = random(1, 20);
	switch (b) {
		case 1:
			bonus = 'bonus-life';
			break;
		case 2:
			bonus = 'bonus-boom';
			break;
	}
	aster.className = `asteroid ${bonus}`;
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