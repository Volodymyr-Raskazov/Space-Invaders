const bonusCreate = (target) => {
	switch (true) {
		case target.classList.contains('bonus-life'):
			let bonusLife = document.createElement('div');
			bonusLife.className = 'bonus-life';
			bonusLife.style.top = target.offsetTop + 'px';
			bonusLife.style.left = target.offsetLeft + 'px';
			board.appendChild(bonusLife);
			moveBonus(bonusLife);
			break;
		case target.classList.contains('bonus-boom'):
			let bonusBoom = document.createElement('div');
			bonusBoom.className = 'bonus-boom';
			bonusBoom.style.top = target.offsetTop + 'px';
			bonusBoom.style.left = target.offsetLeft + 'px';
			board.appendChild(bonusBoom);
			moveBonus(bonusBoom);
			break;
	}
}

const bonusAdd = (bonus) => {
	let enemyCount = 0;
	let asterCount = 0;
	switch (bonus) {
		case 'life':
			lifesPlayer = lifesPlayer + 1;
			lifesCreate();
			break;
		case 'boom':
			enemyCount = document.querySelectorAll('.enemy').length;
			asterCount = document.querySelectorAll('.asteroid').length;
			score = score + (enemyCount * 10) + (asterCount * 5);
			scoreCount();
			removeAll(true);
			break;
	}
}


const moveBonus = (bonus) => {
	let timerID = setInterval(() => {
		bonus.style.top = `${bonus.offsetTop + 10}px`;
		if (bonus.offsetTop > board.offsetHeight) {
			removeBonus(bonus);
			clearInterval(timerID);
			lifeMinus();
		}
	}, 200);
}

const removeBonus = (bonus) => {
	bonus.remove();
}