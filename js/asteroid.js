let aster;

const createAster = () => {
	let asterPosition = random(100, (board.offsetWidth - 100));
	aster = document.createElement('div');
	aster.className = 'asteroid';
	aster.style.left = `${asterPosition}px`;
	board.appendChild(aster);
	moveAster(aster);
}

const moveAster = (aster) => {
	let rotation = 5;
	let timerID = setInterval(() => {
		rotation = rotation += 5;
		aster.style.transform = `rotate(${rotation}deg)`;
		aster.style.top = `${aster.offsetTop + 5}px`;
		if (aster.offsetTop > board.offsetHeight) {
			aster.remove();
			clearInterval(timerID);
		}
	}, 50);
}

const removeAster = (aster) => {
	setTimeout(() => {
		aster.remove();
	}, 600);
}