// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import multiLinePrompt from '../multiLinePrompt.js';
import { ticTacToe } from '../ticTacToe.js';
import { interact, f, winner, isDraw } from '../assets/interact.js';
import playField from './playfield.js';

let finish = false;
const finisherSequence = () => {
  let validAnswer = false; // "Y" or "N" to choose play to pla again
  // PREDEFINING PROMPT VARIABLES
  let drawMess = "";
  let congrats = "";
  let playAgain = "";
  let greatChoice = "";
  let message = "";

  console.clear();
  playField(f);

  if (isDraw) {
    console.clear();
    playField(f);
    drawMess = multiLinePrompt(`
--------------------------------------
|           IT IS A DRAW !           |
|                                    |
|                                    |
|        You should try again        |
|                                    |
|                                    |
|          in a next round...        |
--------------------------------------   
             PRESS ENTER
        `)

  } else {
    console.clear();
    playField(f);
    congrats = multiLinePrompt(`
--------------------------------------
|          CONGRATULATIONS           |
|                                    |
|                                    |
|          PLAYER (${winner}) WIN !          |
|                                    |
|                                    |
|     MOVES: $()  ||   TOTAL: $()    |
--------------------------------------   
              PRESS ENTER
    `)
  }

  while (!validAnswer) {
    console.clear();
    playField(f);
    playAgain = multiLinePrompt(`
--------------------------------------
|            PLAY AGAIN ?            |
|                                    |
|                                    |
|      TYPE IN "Y" to play again     |
|                                    |
|                                    |
|     OR "N" to end your journey     |
--------------------------------------   
           AND PRESS ENTER
    `).toLowerCase();
    if (playAgain === "y" || isDraw === "y") {
      validAnswer = true;
      console.clear();
      playField(f);
      // console.log(`playAgain: ${playAgain} || isDraw: ${isDraw}`);
      greatChoice = multiLinePrompt(`
--------------------------------------
|            Great choice            |
|                                    |
|                                    |
|       you are both true gamers     |
|                                    |
|                                    |
|      have fun in the next round    |
--------------------------------------   
             PRESS ENTER
`)
      ticTacToe();
    } else if (playAgain === "n" || isDraw === "n") {
      validAnswer = true;
      console.clear();
      playField(f);
      // console.log(`playAgain: ${playAgain} || isDraw: ${isDraw}`)
      let greatChoice = multiLinePrompt(`
--------------------------------------
|         It's your choice,          |
|                                    |
|                                    |
|   which doesn't mean it's right.   |
|                                    |
|                                    |
| Anyway thanks for playing whimp ;) |
--------------------------------------   
             PRESS ENTER
`)
      finish = true;
    } else {
      console.clear();
      playField(f);
      // console.log(`playAgain: ${playAgain} || isDraw: ${isDraw}`)
      message = multiLinePrompt(`
--------------------------------------
|  Please make sure you only enter   |
|                                    |
|                                    |
|   "Y" to continue or "N" to end.   |
|                                    |
|                                    |
| Your input is invalid, try again!  |
--------------------------------------   
             PRESS ENTER
     `)
    }
  }
}

export {finisherSequence, finish};


