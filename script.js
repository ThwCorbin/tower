console.log("hiya");

// * Variables ********************
let turtles = [];
let bases = [];
let colors = [
	"--red",
	"--orange",
	"--yellow",
	"--green",
	"--blue",
	"--indigo",
	"--violet",
];
let sizes = ["28", "26", "24", "22", "20", "18", "16"];
let turtleStartPosition = 6;
let basePosition = 0;
let boardBase = document.querySelector(".board-base");
let counter = document.querySelector(".move-counter");

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
		this.color = colors[0];
		this.size = sizes[0];
		this.position = turtleStartPosition;
		this.hasBeenSelected = false;
		this.topTurtle = this.size === "16" ? true : false;
	}
}

class Base {
	constructor() {
		this.position = basePosition;
		this.turtles = this.position === 0 ? [...turtles] : [];
	}
}

// * Functions ********************

// * Create instances of Game, Turtle, and Base
// * Push turtle and base instances into arrays
let setUpBoard = (numTurtles) => {
	let game = new Game();

	for (let i = 0; i < numTurtles; i++) {
		let turtle = new Turtle();
		turtles.push(turtle);

		// * Prepare for next iteration
		colors.shift();
		sizes.shift();
		turtleStartPosition--;
	}

	for (let i = 0; i < 3; i++) {
		let base = new Base();
		bases.push(base);
		basePosition++;
	}
};

let changeCount = () => console.log("This is a counter");
// * ********************
// * ********************
// * ********************
// * ********************
// * ********************
// * ********************
// * Event listeners ********************
counter.addEventListener("click", changeCount);
boardBase.addEventListener("click", (e) => {
	console.log(e.target);
});

// * Invoke on load ********************
setUpBoard(7);
