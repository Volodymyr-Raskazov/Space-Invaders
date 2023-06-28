let planet;
let planetSkin;

// const selPlanetSkin = () => {
// 	const skins = ['skin-1', 'skin-2', 'skin-3', 'skin-4'];
// 	planetSkin = skins[Math.floor(Math.random() * skins.length)];
// 	return planetSkin;
// }

// const createPlanets = () => {
// 	let i = 0;
// 	while (i < random(1, 5)) {
// 		createPlanet();
// 		i++;
// 	}
// }

const createDeathStar = () => {
	deathStar = document.createElement('div');
	deathStar.className = `death-star`;
	deathStar.style.left = `${random(500, (board.offsetWidth - 150))}px`;
	board.appendChild(deathStar);
	movePlanet(deathStar);
}

const createSolarSystem = () => {
	solarSystem = document.createElement('div');
	let html = `<div class="sun"></div>
	<div id="firstPlanet" class="orbit">
		<div class="planet"></div>
	</div>
	<div id="secondPlanet" class="orbit">
		<div class="planet"></div>
	</div>
	<div id="thirdPlanet" class="orbit">
		<div class="planet"></div>
	</div>
	<div id="fourthPlanet" class="orbit">
		<div class="planet"></div>
	</div>`
	solarSystem.className = `solar-system`;
	solarSystem.style.left = `${random(50, 150)}px`;
	solarSystem.innerHTML = html;
	board.appendChild(solarSystem);
	movePlanet(solarSystem);
}

const movePlanet = (planet) => {
	let start;
	switch (true) {
		case planet.classList.contains('solar-system'):
			speed = 2;
			start = createSolarSystem;
			break;
		case planet.classList.contains('death-star'):
			speed = 6;
			start = createDeathStar;
			break;
	}
	let timerID = setInterval(() => {
		planet.style.top = `${planet.offsetTop + speed}px`;
		if (planet.offsetTop > board.offsetHeight) {
			clearInterval(timerID);
			planet.remove();
			start.call();
		}
	}, 200);
}

const removePlanet = (planet) => {
	planet.remove();
	createPlanet();
}