console.log("hiya");

// * Variables ********************
let turtles = [];
let bases = [];
let colors = [
	"--red",
	"--orange",
	"	--yellow",
	"--green",
	"--indigo",
	"--violet",
];
let boardBase = document.querySelector(".board-base");
let counter = document.querySelector(".move-counter");

// * Classes ********************
// * Functions ********************
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
