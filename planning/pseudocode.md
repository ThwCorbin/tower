# Tower of Turtles Pseudocode

## Event Listeners

For each turtles Array => turtle add event listener

- eventHandler(".turtle")

For each bases Array => base add event listener

- eventHandler(".base")

Number of turtle => button add event listener

- eventHandler(".button-num")

## Event Handler

listener: ".turtle" click

1. selectTurtle(clickedTurtle)

listener: ".base" click

1. moveTurtle(clickedBase)

listener: ".number-of-turtles-button" click - Silver

1. chooseNumTurtles()

## setUpBoard()

- create instances of game, turtle - 7 ~~5 default~~, and bases - 3

- push turtle and base instances into arrays

~~## chooseNumTurtles() - Silver plan~~

- Decided to use 7 turtles as default (rainbow colors)

- ~~User clicks button to cycle through options: event listener~~

- ~~update number of turtles variable: 3/5/7~~

- ~~add or subtract turtles displayed on board~~

## Decision point: Game begins/continues

- user clicks a top turtle: event listener

- then user clicks a base: event listener

- OR user clicks same turtle: event listener

## selectTurtle(clickedTurtle)

- if turtle.hasBeenSelected = true, transition turtle back down on its current base, then DP: Game continues

- ~~note: game.turtleInPlay is an Object -> use type coercion for true/false below~~ use !game.turtleInPlay as coercion does not work

- if turtle.hasBeenSelected === false, and game.turtleInPlay == true, ingnore clicks on any other turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay == false, ignore clicks on turtles not on top

- OR make a click on a stack of turtles the same as clicking the top turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay == false, and turtle.topTurtle === true:

  1.  transition turtle up off of its base

  2.  update turtle.hasBeenSelected = true

  3.  update game.turtleInPlay = clickedTurtle Object

- then DP: Game continues

## moveTurtle(clickedBase)

- ~~note: game.turtleInPlay is an Object -> use type coercion for true/false below~~ use !game.turtleInPlay as coercion does not work

- if game.turtleInPlay == false, return then DP: Game continues

- OR make a click on a base (with at least one turtle) the same as clicking the top turtle, then return

- else if turtle is larger the the top turtle on clickedBase

      	1. errorMessage("illegal move")

      	2. then return

- else DOM transition the turtle sideways and down on to clickedBase

- then remove turtle from previous base Array

- then add turtle to current base Array

- ~~then updateTopTurtles(clickedBase)~~

- then call stack returns and DP: Game continues

~~## updateTopTurtles(clickedBase)~~

- I moved kept the following inside of moveTurtle(): consider moving these items out into a separate function

- after moveTurtle(), update what the top turtle is on each base

- note: the ~~last~~ first turtle in each base.turtles Array[0] is a top turtle

- check if ~~one~~ the second or third base ~~has~~ have all the turtles: if yes, gameOver(), then return

- else if base.turtles.length is true, set each base.turtles ~~[length-1]~~[0].topTurtle = true, else continue...

- then set clickedBase's turtle that is 2nd from ~~Array end~~ the top to false, base.turtles~~[length - 2]~~[0] = false

- call stack returns to moveTurtle()

~~## errorMessage(message)~~

- I moved message handling to Game class as a displayMessage method

- "illegal move" message then DP: Game Continues

## Store turtle position - Gold plan

- develop if there is a gold plan

## gameOver()

- display a winner's message

- prompt user to reset() to play again

## reset()

- set turtles.length = 0 (deletes array elements)

- set bases.length = 0 (deletes array elements)

- setUpBoard() to initiate new instances of Game, Turtle, and Base

## Store results - Gold plan

- develop if there is a gold plan
