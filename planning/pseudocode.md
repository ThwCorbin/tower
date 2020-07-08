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

- if hasBeenSelected = true, transition turtle back down on its current peg, then DP: Game continues

- ignore clicks on turtles not on top then DP: Game continues

- OR make a click on a stack of turtles the same as clicking the top turtle

- update hasBeenSelected = true

- transition turtle up off of its peg

- ingnore clicks on any other turtle

- DP: Game Continues

## moveTurtle()

## Check turtle position: ok/not

## errorMessage(message)

- "illegal move" message then DP: Game Continues

## Store turtle position

## Game over/winner

## Reset

## Store results
