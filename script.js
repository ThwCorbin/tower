// * Variables ********************
let game;
let turtlesArr = [];
let basesArr = [];
let sizeTurtle = 14; // turtlesArr[n].size: 16, 18, 20, 22, 24, 26, 28
let rowInitial = 1; // turtlesArr[n].gridRow: 1,2,3,4,5,6,7
let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
let idxColors = 0;
let basePosition = 0; // baseArr[n].position: 0,1,2
// ! set turtles value after creating instances of class Turtle
let turtles;
let bases = document.querySelectorAll(".base");
let message = document.querySelector(".message");
let counter = document.querySelector(".move-counter");
let resetBtn = document.querySelector(".reset-btn");
let turtleGrid = document.querySelector(".grid-turtles");

// todo: add turtle svgs to replace color blocks
// todo: media querries small and large devices
// todo: consider adding "Are you sure?" option to reset

// * Classes ********************
class Game {
	constructor() {
		this.movesCurrent = 0;
		this.gameActive = false;
		this.turtleInPlay = false;
		this.turtleInDOM = "";
	}
	displayMessage(msg, playAgain) {
		message.textContent = msg;
		window.setTimeout(function () {
			if (playAgain) {
				message.textContent = `Hit reset to play again!`;
				return;
			}
			message.textContent = `Restack the turtles on base two or three to win`;
		}, 5000);
	}
}

class Turtle {
	constructor() {
		this.size = sizeTurtle += 2;
		this.gridRow = rowInitial++;
		this.gridColumn = 1;
		this.color = colors[idxColors++];
		this.hasBeenSelected = false;
		this.topTurtle = this.size === 16 ? true : false;
		this.idxTurtle = null;
	}
}

class Base {
	constructor() {
		this.position = basePosition;
		this.turtles = this.position === 0 ? [...turtlesArr] : [];
	}
}

// * Functions ********************

let reset = () => {
	turtlesArr.length = 0;
	basesArr.length = 0;
	sizeTurtle = 14;
	rowInitial = 1;
	idxColors = 0;
	basePosition = 0;
	counter.textContent = "0";

	createClasses();
	// * reset value to new instances of class Turtle; then add event listener
	turtles = document.querySelectorAll(".turtle");
	turtles.forEach((turtle) => turtle.addEventListener("click", selectTurtle));
};

let checkForWin = () => {
	if (basesArr[1].turtles.length === 7 || basesArr[2].turtles.length === 7) {
		game.gameActive = false;
		game.displayMessage("Player Wins!!!", true);
	} else {
		return;
	}
};

let moveTurtle = (e) => {
	let base = e.target;
	let column = base.classList[1].slice(5); // base-n length - 1 = 5
	let idx = column - 1;
	let idxPrevBase = game.turtleInPlay.gridColumn - 1;
	let turtlesOnBase = basesArr[idx].turtles.length;

	// * if no turtle has been selected, return
	if (!game.turtleInPlay) {
		game.displayMessage(`Pick a turtle first before selecting a base!`);
		return;
		// * if the base is the same (coercion) as the selected turtle
	} else if (column == turtlesArr[game.idxTurtle].gridColumn) {
		// * unselect turtle
		game.turtleInDOM.style.border = `0.05em solid var(--white)`;
		game.hasBeenSelected = false;
		game.turtleInPlay = false;
		game.turtleInDOM = "";
		// * if the base does not have any turtles on it
	} else if (!basesArr[idx].turtles.length) {
		// * move the selected turtle to this base
		game.turtleInDOM.style.gridColumn = column;
		game.turtleInDOM.style.gridRow = 7;
		// * update the turtle object
		game.turtleInPlay.gridColumn = Number(column);
		game.turtleInPlay.gradRow = 7;
		// * remove turtle from previous base Array and add to new base Array
		basesArr[idx].turtles.unshift(basesArr[idxPrevBase].turtles.shift());
		// * set the next turtle in the previous base as a top turtle
		if (basesArr[idxPrevBase].turtles[0]) {
			basesArr[idxPrevBase].turtles[0].topTurtle = true;
		}
		// * remove border highlight
		game.turtleInDOM.style.border = `0.05em solid var(--white)`;
		// * reset variables
		game.turtleInPlay.hasBeenSelected = false;
		game.turtleInPlay = false;
		game.turtleInDOM = "";
		// * Update counter
		counter.textContent++;
		checkForWin();
		// * Check if selected turtle is larger than the turtle on the new base
	} else if (game.turtleInPlay.size > basesArr[idx].turtles[0].size) {
		game.displayMessage(
			`The ${game.turtleInPlay.color} turtle is too big for the ${basesArr[idx].turtles[0].color} turtle`
		);
	} else {
		// * move the selected turtle to this base
		game.turtleInDOM.style.gridColumn = column;
		game.turtleInDOM.style.gridRow = 7 - turtlesOnBase;
		// * update the turtle object
		game.turtleInPlay.gridColumn = Number(column);
		game.turtleInPlay.gradRow = 7 - turtlesOnBase;
		// * remove turtle from previous base Array and add to new base Array
		basesArr[idx].turtles.unshift(basesArr[idxPrevBase].turtles.shift());
		// * set topTurtle = false for the turtle that is 2nd
		if (basesArr[idx].turtles[1]) {
			basesArr[idx].turtles[1].topTurtle = false;
		}
		// * set the next turtle in the previous base as a top turtle
		if (basesArr[idxPrevBase].turtles[0]) {
			basesArr[idxPrevBase].turtles[0].topTurtle = true;
		}
		// * remove border highlight
		game.turtleInDOM.style.border = `0.05em solid var(--white)`;
		// * reset variables
		game.turtleInPlay.hasBeenSelected = false;
		game.turtleInPlay = false;
		game.turtleInDOM = "";
		// * Update counter
		counter.textContent++;
		checkForWin();
	}
};

let selectTurtle = (e) => {
	if (!game.gameActive) return;
	let turtle = e.target;
	let idx = turtle.classList[1].slice(7); // turtle-n length-1 = 7

	// * if this turtle has already been selected
	if (turtlesArr[idx].hasBeenSelected === true) {
		// * unselect turtle
		turtle.style.border = `0.05em solid var(--white)`;
		turtlesArr[idx].hasBeenSelected = false;
		game.turtleInPlay = false;
		game.turtleInDOM = "";
		// * if this turtle is not a top turtle
	} else if (game.turtleInPlay) {
		game.displayMessage(
			`The ${game.turtleInPlay.color} turtle has already been selected!`
		);
		return;
	} else if (!turtlesArr[idx].topTurtle) {
		game.displayMessage(
			`The ${turtlesArr[idx].color} turtle is not on the top of its stack!`
		);
		return;
		// * if there is already another turtle selected
	} else {
		// * highlight turtle border
		turtle.style.border = `.25em solid var(--highlight)`;
		turtlesArr[idx].hasBeenSelected = true;
		game.turtleInPlay = turtlesArr[idx];
		game.turtleInDOM = turtle;
		game.idxTurtle = idx;
	}
};

// * Update DOM with turtles
let setUpBoard = () => {
	let string = "";
	for (let i = 0; i < turtlesArr.length; i++) {
		string += `<div class="turtle turtle-${i}"}></div>`;
	}
	turtleGrid.innerHTML = string;
	game.displayMessage(
		`Ready to play!  Select the top turtle in the stack to begin!`
	);
	game.gameActive = true;
};

// * Create instances of Game, Turtle, and Base
// * Push turtle and base instances into arrays
let createClasses = () => {
	let numTurtles = 7;
	game = new Game();

	for (let i = 0; i < numTurtles; i++) {
		let turtle = new Turtle();
		turtlesArr.push(turtle);
	}

	for (let i = 0; i < 3; i++) {
		let base = new Base();
		basesArr.push(base);

		// * Prepare for next iteration
		basePosition++;
	}

	setUpBoard();
};

// * Invoke on load ********************
createClasses();

// * Event listeners ********************

// ! turtles declared at top, but we set value after creating Turtle instances
turtles = document.querySelectorAll(".turtle");
turtles.forEach((turtle) => turtle.addEventListener("click", selectTurtle));

bases.forEach((base) => base.addEventListener("click", moveTurtle));

resetBtn.addEventListener("click", reset);

// * Consider
// todo: consider adding "Are you sure?" option to reset
// add this.areYouSure = false to Game class
// if (game.gameActive && !game.areYouSure) {
// game.displayMessage(`Are you sure you want to reset? Hit reset again.`)
// code
// } else if (!gameActive) {
// code
//	}
