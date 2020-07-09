console.log("hiya");

// * Variables ********************
let turtlesArr = [];
let basesArr = [];
let sizes = ["16", "18", "20", "22", "24", "26", "28"];
// let colors = [
// 	"--red",
// 	"--orange",
// 	"--yellow",
// 	"--green",
// 	"--blue",
// 	"--indigo",
// 	"--violet",
// ];
// let sizes = ["28", "26", "24", "22", "20", "18", "16"];
// let turtleStartPosition = 6;
let basePosition = 0;
let boardBase = document.querySelector(".board-base");
let counter = document.querySelector(".move-counter");
let turtleGrid = document.querySelector(".grid-turtles");

// * Classes ********************
class Game {
	constructor() {
		this.movesCurrent = 0;
		this.gameActive = false;
		this.turtleInPlay = false;
	}
	illegalMove() {
		console.log("Illegal move");
	}
}

class Turtle {
	constructor() {
		this.color = null;
		this.size = null;
		this.position = null;
		this.hasBeenSelected = false;
		// this.color = colors[0];
		// this.size = sizes[0];
		// this.position = turtleStartPosition;
		// this.topTurtle = this.size === "16" ? true : false;
	}
}

class Base {
	constructor() {
		this.position = basePosition;
		this.turtles = this.position === 0 ? [...turtlesArr] : [];
	}
}

// * Functions ********************

// * Update DOM with turtles
let setUpBoard = () => {
	let string = "";
	for (let i = 0; i < turtlesArr.length; i++) {
		string += `<div class="turtle turtle-${i}"}></div>`;
	}
	turtleGrid.innerHTML = string;
};

// * Create instances of Game, Turtle, and Base
// * Push turtle and base instances into arrays
let createClasses = (numTurtles) => {
	let game = new Game();

	for (let i = 0; i < numTurtles; i++) {
		let turtle = new Turtle();
		turtlesArr.push(turtle);

		// * Prepare for next iteration
		// colors.shift();
		// sizes.shift();
		// turtleStartPosition--;
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
turtles.forEach((turtle) => {
	turtle.addEventListener("click", (e) => {
		console.log(e.target);
	});
});

boardBase.addEventListener("click", (e) => {
	console.log(e.target);
});

counter.addEventListener("click", changeCount);
