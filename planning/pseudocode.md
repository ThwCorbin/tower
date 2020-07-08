# Tower of Turtles Pseudocode

## Event Listeners

For each turtles Array => turtle add event listener

- eventHandler(".turtle")

For each pegs Array => peg add event listener

- eventHandler(".peg")

Number of turtle => button add event listener

- eventHandler(".button-num")

## Event Handler

listener: ".turtle" click

1. selectTurtle(clicked turtle)

listener: ".peg" click

1. moveTurtle(clicked peg)

listener: ".number-of-turtles-button" click - Silver

1. chooseNumTurtles()

## onPageLoad()

- create instances of game, turtle - 5 default, and pegs - 3

- push turtle and peg instances into arrays

## chooseNumTurtles() - Silver

- User clicks button to cycle through options: event listener

- update number of turtles variable: 3/5/7

- add or subtract turtles displayed on board

## Decision point: Game begins/continues

- user clicks a top turtle: event listener

- then user clicks a peg: event listener

- OR user clicks same turtle: event listener

## selectTurtle(clickedTurtle)

- if turtle.hasBeenSelected = true, transition turtle back down on its current peg, then DP: Game continues

- if turtle.hasBeenSelected === false, and game.turtleInPlay === true, ingnore clicks on any other turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay === false, ignore clicks on turtles not on top

- OR make a click on a stack of turtles the same as clicking the top turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay === false, and turtle.topTurtle === true:

  1.  transition turtle up off of its peg

  2.  update turtle.hasBeenSelected = true

  3.  update game.turtleInPlay = true

- then DP: Game continues

## moveTurtle(clickedPeg)

-

* then updateTopTurtles(clickedPeg)

* then call stack returns and DP: Game continues

## Check turtle position: ok/not

## updateTopTurtles(clickedPeg)

- after moveTurtle(), update what the top turtle is on each peg

- note: the last turtle in each peg.turtles Array is a top turtle

- if peg.turtles.length is true, set each peg.turtles[length-1].topTurtle = true, else continue...

- then set clickedPeg's turtle that is 2nd from Array end to false, peg.turtles[length - 2] = false

- call stack returns to moveTurtle()

## errorMessage(message)

- "illegal move" message then DP: Game Continues

## Store turtle position

## Game over/winner

## Reset

## Store results
