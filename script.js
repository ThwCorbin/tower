console.log("hiya");

// * Variables ********************
let game;
let turtlesArr = [];
let basesArr = [];
let sizeTurtle = 14; // turtlesArr[n].size: 16, 18, 20, 22, 24, 26, 28
let rowInitial = 1; // turtlesArr[n].gridRow: 1,2,3,4,5,6,7
let basePosition = 0; // baseArr[n].position: 0,1,2
let bases = document.querySelectorAll(".base");
let message = document.querySelector(".message");
let counter = document.querySelector(".move-counter");
let turtleGrid = document.querySelector(".grid-turtles");

// * Classes ********************
class Game {
	constructor() {
		this.movesCurrent = 0;
		this.gameActive = false;
		this.turtleInPlay = false;
		this.turtleInDOM = "";
	}
	illegalMove() {
		console.log("Illegal move");
	}
}

class Turtle {
	constructor() {
		this.size = sizeTurtle += 2;
		this.gridColumn = 1;
		this.gridRow = rowInitial++;
		this.hasBeenSelected = false;
		this.topTurtle = this.size === 16 ? true : false;
	}
}

class Base {
	constructor() {
		this.position = basePosition;
		this.turtles = this.position === 0 ? [...turtlesArr] : [];
	}
}

// * Functions ********************

checkForWin = () => {
	if (basesArr[1].turtles.length === 7 || basesArr[2].turtles.length === 7) {
		console.log("Winner !!!!");
		// todo: winner message & reset button to play agains
		game.gameActive = false;
	} else {
		return;
	}
};

let moveTurtle = (e) => {
	let base = e.target;
	let column = base.classList[1].slice(5); // base-n length-1 = 5
	let idx = column - 1;
	let idxPrevBase = game.turtleInPlay.gridColumn - 1;
	let turtlesOnBase = basesArr[idx].turtles.length;

	// * if no turtle has been selected, return
	if (!game.turtleInPlay) {
		// todo: add message to pick a turtle to move first
		return;
		// * if the base does not have any turtles on it
	} else if (!basesArr[idx].turtles.length) {
		// * move the selected turtle to this base
		game.turtleInDOM.style.gridColumn = column;
		game.turtleInDOM.style.gridRow = 7;
		// * update the turtle object
		game.turtleInPlay.gridColumn = Number(column);
		game.turtleInPlay.gradRow = 7;
		// * remove turtle from previous base Array and add to new base Array
		basesArr[idx].turtles.push(basesArr[idxPrevBase].turtles.shift());
		// * set the next turtle in the previous base as a top turtle
		if (basesArr[idxPrevBase].turtles[0])
			basesArr[idxPrevBase].turtles[0].topTurtle = true;
		// * remove border highlight
		game.turtleInDOM.style.border = `0.05em solid var(--white)`;
		// * Update counter
		counter.textContent++;
		// * reset variables
		game.turtleInPlay.hasBeenSelected = false;
		game.turtleInPlay = false;
		game.turtleInDOM = "";
		checkForWin();
		// * Check if selected turtle is larger than the turtle on the new base
	} else if (game.turtleInPlay.size > basesArr[idx].turtles[0].size) {
		// todo: error message - This turtle is too big
		console.log("This turtle is too big");
	} else {
		// * move the selected turtle to this base
		game.turtleInDOM.style.gridColumn = column;
		game.turtleInDOM.style.gridRow = 7 - turtlesOnBase;

		// todo: set the clickedBase's turtle that is 2nd from the top to topTurtle = false
		checkForWin();
	}
};

let selectTurtle = (e) => {
	if (!game.gameActive) return;
	let turtle = e.target;
	let idx = turtle.classList[1].slice(7); // turtle-n length-1 = 7

	// * if this turtle has already been selected
	if (turtlesArr[idx].hasBeenSelected === true) {
		// todo: unselect turtle
		console.log("Turtle already selected");
		// * if this turtle is not a top turtle
	} else if (!turtlesArr[idx].topTurtle) {
		// * ignore clicks on a turtle that is not on top of a stack
		return;
		// * if there is already another turtle selected
	} else if (game.turtleInPlay) {
		// todo: ignore or let player know that fact
		console.log("Another turtle has already been selected");
	} else {
		// * highlight turtle border
		turtle.style.border = `.25em solid var(--highlight)`;
		turtlesArr[idx].hasBeenSelected = true;
		game.turtleInPlay = turtlesArr[idx];
		game.turtleInDOM = turtle;
	}
};

// * Update DOM with turtles
let setUpBoard = () => {
	let string = "";
	for (let i = 0; i < turtlesArr.length; i++) {
		string += `<div class="turtle turtle-${i}"}></div>`;
	}
	turtleGrid.innerHTML = string;

	game.gameActive = true;
};

// * Create instances of Game, Turtle, and Base
// * Push turtle and base instances into arrays
let createClasses = (numTurtles) => {
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

let changeCount = () => console.log("This is a counter");

// * Invoke on load ********************
createClasses(7);

// * Event listeners ********************

// * turtles must be declared after creating class Turtle
let turtles = document.querySelectorAll(".turtle");
turtles.forEach((turtle) => turtle.addEventListener("click", selectTurtle));

bases.forEach((base) => base.addEventListener("click", moveTurtle));

counter.addEventListener("click", changeCount);

let turtle1 = document.querySelector(".turtle-1");

let moveThisTurtle = () => {
	turtle1.style.grid["grid-column"] = "2/3";
};
// * Obsolete code...probably ********************

// let transX = idx === 0 ? idx : idx * 30;
// let transY =
// 	turtlesOnBase === 0
// 		? 2 * turtleObj.yMultiple
// 		: 2 * (turtleObj.yMultiple - turtlesOnBase);
// game.turtleInDOM.style.transform = `translate(${transX}vw, ${transY}em)`;

// let yStart = 6;
// this.yMultiple = yStart--;

// let colors = [
// 	"--red",
// 	"--orange",
// 	"--yellow",
// 	"--green",
// 	"--blue",
// 	"--indigo",
// 	"--violet",
// ];

// let sizes = ["16", "18", "20", "22", "24", "26", "28"];
// let sizes = ["28", "26", "24", "22", "20", "18", "16"];
// let turtleStartPosition = 6;

// this.color = colors[0];
// this.size = sizes[0];
// this.position = turtleStartPosition;
// this.topTurtle = this.size === "16" ? true : false;

// // Prepare for next iteration
// colors.shift();
// sizes.shift();
// turtleStartPosition--;
