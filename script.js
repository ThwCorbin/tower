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

// let turtleSVG = `<svg height='100px' width='100px'  fill="#000000" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
// <g transform="translate(0,-952.36218)">
// <path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" d="m 79.789678,981.18062 c -2.51526,1.67112 -5.21814,4.21614 -8.70368,5.61577 1.21515,2.42553 0.95071,5.66105 0.53224,8.0668 5.29267,-2.36945 10.40725,-4.12954 16.31158,-5.02626 l -1.22102,-1.79954 c -0.36001,-0.54523 0.0108,-1.40261 0.65747,-1.52028 1.88156,-0.3457 3.10385,-0.84377 3.7883,-1.33414 0.68445,-0.49037 0.8387,-0.88909 0.84532,-1.33413 0.0129,-0.87325 -1.07289,-2.41311 -2.84906,-3.66111 -3.26627,-1.60266 -6.79478,-0.65471 -9.36115,0.99289 z m -29.80541,1.36516 0.84532,3.56803 6.01118,3.4129 7.01303,-5.39859 c -1.30356,-0.43134 -2.72983,-0.76849 -4.25792,-1.02387 -3.42431,-0.53676 -6.35935,-0.65948 -9.61161,-0.55847 z m -2.00372,0.15518 c -5.0115,0.54598 -10.14851,2.15742 -14.6209,3.59906 l 3.03691,2.54415 8.32798,2.73033 4.72754,-3.97138 c -0.24337,-0.12689 -0.42943,-0.35738 -0.50093,-0.62052 z m 40.01189,0.093 c 0.5533,0 1.00186,0.44451 1.00186,0.99284 0,0.54833 -0.44856,0.99285 -1.00186,0.99285 -0.55332,0 -1.00187,-0.44452 -1.00187,-0.99285 0,-0.54833 0.44855,-0.99284 1.00187,-0.99284 z m -21.97837,2.20287 -8.07751,6.2363 0,4.09548 4.2266,5.11939 c 3.45722,-2.72504 5.79964,-6.51881 7.70182,-10.67302 -0.55083,-2.21221 -1.97272,-3.81753 -3.85091,-4.77811 z m -34.84604,2.01671 c -2.92065,0.99988 -5.85527,2.11793 -8.64106,3.2888 l 8.10882,4.12651 3.88222,-4.59191 z m 20.13118,1.6444 -5.38502,4.52985 0,11.44871 c 6.846,0.4634 10.75134,-0.6776 14.6209,-3.0406 l -4.3518,-5.2744 c -0.15182,-0.17025 -0.24192,-0.39347 -0.25047,-0.62052 l 0,-4.43678 z m -15.05925,2.2339 -4.38315,5.21242 -1.03317,6.60864 c 4.44166,0.7506 8.91262,1.3568 13.08683,1.7375 l 0,-11.01439 z m -16.12373,0.43437 c -3.65463,1.80206 -7.34126,3.53288 -10.2690898,5.95706 2.0496898,0.91214 4.6709598,1.78991 7.6705098,2.60621 l 5.85463,-6.91887 z m 5.07193,2.57519 -5.54155,6.5466 c 2.86866,0.7153 5.99803,1.344 9.20461,1.9236 l 0.97056,-6.1122 z m 44.42635,0.68263 c -4.63895,10.36917 -14.78168,12.44257 -23.76292,12.00727 -12.71649,-0.9694 -29.24469,-3.9025 -37.4133198,-7.78764 -0.32909,0.36226 -0.3553,0.8565 -0.43827,1.24104 4.7309298,2.1963 14.2400998,4.7107 23.9507898,6.3604 10.09746,1.7154 20.45185,2.4958 25.42227,1.3962 7.73054,-1.9894 11.12239,-7.5949 12.24145,-13.21727 z m 0.40701,5.27448 c -0.39218,0.81569 -0.86995,1.60539 -1.37756,2.35799 0.82774,2.1444 2.34747,4.2468 2.37943,6.3914 0,1.8456 -0.98518,3.4688 -2.2542,4.9643 -2.66898,3.1497 -6.13375,5.3477 -8.42191,8.5632 -0.76056,1.0882 -1.1068,2.1551 -1.18971,3.2268 9.90066,-0.6481 18.73673,-9.7619 17.84568,-18.6469 -0.50931,-1.6353 -1.5156,-2.8173 -2.53592,-3.6921 -1.45272,-1.1839 -3.05213,-2.2472 -4.44581,-3.16469 z m -46.36746,6.94989 -10.6761,5.5227 c -1.7489,2.2727 -2.33656,4.1621 -2.03503,5.895 0.2819,1.6202 1.47377,3.2741 3.4439,4.9953 7.03022,-3.7689 12.39757,-10.0147 14.37047,-15.3581 -1.73454,-0.3228 -3.43254,-0.6923 -5.10324,-1.0549 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible">
// </path>
// </g>
// </svg>`;
// color:#000000;

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
		// string += `<div class="turtle turtle-${i}"}>${turtleSVG}</div>`;
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
