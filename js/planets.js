let planet;
let planetSkin;

const selPlanetSkin = () => {
	const skins = ['skin-1', 'skin-2', 'skin-3'];
	planetSkin = skins[Math.floor(Math.random() * skins.length)];
	return planetSkin;
}

const createPlanets = () => {
	let i = 0;
	while (i < random(1, 5)) {
		createPlanet();
		i++;
	}
}

const createPlanet = () => {
	let planetPosition = random(100, (board.offsetWidth - 100));
	selPlanetSkin();
	planet = document.createElement('div');
	planet.className = `planet ${planetSkin}`;
	planet.style.left = `${planetPosition}px`;
	board.appendChild(planet);
	movePlanet(planet);
}

const movePlanet = (planet) => {
	let timerID = setInterval(() => {
		planet.style.top = `${planet.offsetTop + 50}px`;
		if (planet.offsetTop > board.offsetHeight) {
			removePlanet(planet);
			clearInterval(timerID);
		}
	}, 50);
}

const removePlanet = (planet) => {
	planet.remove();
	createPlanets();
}