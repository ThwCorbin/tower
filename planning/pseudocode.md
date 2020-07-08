# Tower of Turtles Pseudocode

## Event Listeners

For each turtles Array => turtle add event listener

- eventHandler(".turtle")

For each pegs Array => peg add event listener

- eventHandler(".peg")

Number of turtle => button add event listener

- eventHandler(".button-num")

## Event Handler

listener: turtle click

1. selectTurtle(clicked turtle)

listener: peg click

1. is turtle in play: hasBeenClicked = false ? moveTurtle() : errorMessage("illegal move")

2. selectTurtle(clicked turtle)

listener: num turtle button click - Silver

1. chooseNumTurtles()

## onPageLoad()

- create instances of game, turtle - 5 default, and pegs - 3

- push turtle and peg instances into arrays

## chooseNumTurtles() - Silver

- User clicks button to cycle through options: event listener

- update number of turtles variable: 3/5/7

- add or subtract turtles displayed on board

## Decision point: Game begins/continues

- user clicks the top turtle: event listener

- user clicks a peg: event listener

## selectTurtle(clickedTurtle)

- update hasBeenClicked = true

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
