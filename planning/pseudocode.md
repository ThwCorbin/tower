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

1. selectTurtle(clickedTurtle)

listener: ".peg" click

1. moveTurtle(clickedPeg)

listener: ".number-of-turtles-button" click - Silver

1. chooseNumTurtles()

## setUpBoard()

- create instances of game, turtle - 5 default, and pegs - 3

- push turtle and peg instances into arrays

## chooseNumTurtles() - Silver plan

- User clicks button to cycle through options: event listener

- update number of turtles variable: 3/5/7

- add or subtract turtles displayed on board

## Decision point: Game begins/continues

- user clicks a top turtle: event listener

- then user clicks a peg: event listener

- OR user clicks same turtle: event listener

## selectTurtle(clickedTurtle)

- if turtle.hasBeenSelected = true, transition turtle back down on its current peg, then DP: Game continues

- note: game.turtleInPlay is an Object -> use type coercion for true/false below

- if turtle.hasBeenSelected === false, and game.turtleInPlay == true, ingnore clicks on any other turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay == false, ignore clicks on turtles not on top

- OR make a click on a stack of turtles the same as clicking the top turtle

- if turtle.hasBeenSelected === false, and game.turtleInPlay == false, and turtle.topTurtle === true:

  1.  transition turtle up off of its peg

  2.  update turtle.hasBeenSelected = true

  3.  update game.turtleInPlay = clickedTurtle Object

- then DP: Game continues

## moveTurtle(clickedPeg)

- note: game.turtleInPlay is an Object -> use type coercion for true/false below

- if game.turtleInPlay == false, return then DP: Game continues

- OR make a click on a peg (with at least one turtle) the same as clicking the top turtle, then return

- else if turtle is larger the the top turtle on clickedPeg

      	1. errorMessage("illegal move")

      	2. then return

- else DOM transition the turtle sideways and down on to clickedPeg

- then remove turtle from previous peg Array

- then add turtle to current peg Array

- then updateTopTurtles(clickedPeg)

- then call stack returns and DP: Game continues

## updateTopTurtles(clickedPeg)

- after moveTurtle(), update what the top turtle is on each peg

- note: the last turtle in each peg.turtles Array is a top turtle

- check if one peg has all the turtles: if yes, gameOver(), then return

- else if peg.turtles.length is true, set each peg.turtles[length-1].topTurtle = true, else continue...

- then set clickedPeg's turtle that is 2nd from Array end to false, peg.turtles[length - 2] = false

- call stack returns to moveTurtle()

## errorMessage(message)

- "illegal move" message then DP: Game Continues

## Store turtle position - Gold plan

- develop if there is a gold plan

## gameOver()

- display a winner's message

- prompt user to reset() to play again

## reset()

- set turtles.length = 0 (deletes array elements)

- set pegs.length = 0 (deletes array elements)

- setUpBoard() to initiate new instances of Game, Turtle, and Peg

## Store results - Gold plan

- develop if there is a gold plan
