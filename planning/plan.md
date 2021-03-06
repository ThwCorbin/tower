# Tower of Turtles Planning

## Brief

Make a tower of turtles for a user to move from one base to another base. The board will have three bases and between five and seven turtles of increasing sizes. User wins by moving all of the turtles from one base to another base in order (largest on bottom up to smallest on top).

## Bronze, Silver, and Gold

### Bronze: minimum viable product

- The board has three bases
- The board has five blocks, which all begin the game stacked together on one base
- Each block is slightly smaller than the block immediately below it in the stack
- User can click on the top block on the stack, and it transitions up off of its base
- User can click on a different base, and the block will transition sideways and then down onto the clicked base
- This is one move; this is the only way to move
- User can only move one block at a time
- User can only move the top block on any given base
- User can replace the clicked block on its current base without it counting as a move
- User can move the block to either of the other two bases, however...
- User cannot place a larger block on a smaller block (user will get message on the screen if user tries to do so)
- User can now select another block from the stack and move it
- User will see how many moves they have made on a counter
- User can continue to move blocks between different bases
- To win, user must move all blocks on to one base, which is different from the starting base, and the blocks must be in ascending order by size (largest block on the bottom)
- User sees a winner's message
- User can reset the game at any time
- RWD: Game will work on screens 768px and larger
- Game is deployed to GitHub Pages
- Game renders when run without errors on all major browsers
- README documents the project well

### Silver: looks and works better

- RWD: Game will be responsive across major device sizes
- Blocks are turtle SVG images of varying sizes in rainbow colors
- Turtle transitions are pleasant to behold
- Give option to play three, five, or seven turtles
- JavaScript, HTML, and CSS files look professional and are well documented

### Gold: bells and whistles

- Easy mode is three turtles
- Medium mode is seven turtles
- Hard mode is eight turtles (shifting from odd to even numbers of turtles changes optimum solution)
- Game tracks a user's scores across games even if the page is reloaded
- Game has time-based scoring option
- Game has option to turn board upside down or its side
- Game has option to use several types of SVG images that begin with the letter T (Tomato, Taco, Turtle, Toaster, Trumpet, Trailer, Truck)
- Game has option to add constraints, including these:[1]

      	1. No odd disk may be placed on an odd disk
      	2. No even disk may be placed on an even disk
      	3. There will sometimes be two possible bases: one will have disks, and the other will be empty
      	4. Place the disk on the non-empty base
      	5. Never move a disk twice in succession

## Components

### Data

#### Variables

- turtles Array of turtle Objects
- bases Array of base Objects
- colors Array of rainbow color Strings
- DOM elements to select
- Silver - numTurtles

#### Class

class Game: bronze/silver plan

- player: String (may not need)
- movesCurrent: Number
- gameActive: Boolean
- turtleInPlay: null initially, then set to turtle object in play, then null
- method() illegal move error message
- method() select a turtle first error message (may not need)

class Game: gold plan adds

- timeCurrent: Number
- gameOrientation: String OR Number
- matchesPlayed: Number
- movesHistory: Array of Numbers
- timesHistory: Array of Numbers
- losses OR resetsHistory: Array of Numbers
- winsHistory: Array of Numbers
- gameConstraintsOptions: ?? Object ??

class Turtle: bronze/silver

- size OR number: Number
- AND/OR color: String
- position: Number
- topTurtle: smallest turtle : true ? false (these are initial instance values; this will update after each move)
- hasBeenSelected = Boolean

class Turtle: gold plan adds

- shape/form of turtle(e.g. toaster)

class Base

- position: Number
- turtles: Array

#### Functions

- Event handler
- Create classes
- Set up board
- Choose number of turtles
- Game begins
- Select turtle
- Move turtle
- Update top turtles on bases
- Error message: illegal move
- Store turtle position
- Game over
- Reset
- Store results

### Presentation

### Views

### Style

- Board is a grid container
- bases are grid items
- Turtles are grid items
- Move turtles up, sideways, down with grid and transitions

### DOM Manipulation

- Select and move turtles
- Display current moves on counter
- Display illegal moves message
- Reset board and counter
- Silver - change number of turtles 3/5 default/7

## Resources

- Wikipedia: [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi, "Wikipedia entry for Tower of Hanoi")

## Footnotes

[1] Constraints from Wikipedia's [Tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi, "Wikipedia entry for Tower of Hanoi") entry.
