// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import multiLinePrompt from '../multiLinePrompt.js';

import { ticTacToe, changeStart } from '../ticTacToe.js';
import { f, winner, isDraw, validInput, changeValidInput } from '../assets/interact.js';
import playField from './playfield.js';
import { currentPlayers, clearCurrentPlayer, allTimePlayers } from './scoreBoard.js';

let finish = false;

const finisherSequence = () => {
  let validAnswer = false; // "Y" or "N" to choose play again
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
  -------------------------------------
  |           IT IS A DRAW !          |
  |                                   |
  |                                   |
  |        You should try again       |
  |                                   |
  |                                   |
  |          in a next round...       |
  -------------------------------------   
               PRESS ENTER
        `)

  } else {
    console.clear();
    playField(f);
    congrats = multiLinePrompt(`
  -------------------------------------
  |          CONGRATULATIONS          |
  |                                   |
  |                                   |
  |          PLAYER (${winner}) WIN !         |
  |                                   |
  |                                   |
  |     MOVES: ${}  ||   WINS: ${}   |
  -------------------------------------   
                PRESS ENTER
    `)
  }

  while (!validAnswer) {
    console.clear();
    playField(f);
    playAgain = multiLinePrompt(`
  -------------------------------------
  |            PLAY AGAIN ?           |
  |                                   |
  |                                   |
  |      TYPE IN "Y" to play again    |
  |                                   |
  |                                   |
  |     OR "N" to end your journey    |
  -------------------------------------   
             AND PRESS ENTER
    `).toLowerCase();
    if (playAgain === "y") {
      validAnswer = true;
      console.clear();
      playField(f);
      greatChoice = multiLinePrompt(`
  -------------------------------------
  |            Great choice           |
  |                                   |
  |                                   |
  |       you are both true gamers    |
  |                                   |
  |                                   |
  |      have fun in the next round   |
  -------------------------------------   
               PRESS ENTER
`)
      changeStart();
      ticTacToe();
    } else if (playAgain === "n") {
      validAnswer = true;
      console.clear();
      playField(f);
      let greatChoice = multiLinePrompt(`
  -------------------------------------
  |         It's your choice,         |
  |                                   |
  |                                   |
  |   which doesn't mean it's right.  |
  |                                   |
  |                                   |
  |     Thanks for playing whimp ;)   |
  -------------------------------------   
               PRESS ENTER
`)
      // CLEAR PLAYER STATS
      clearCurrentPlayer();
      finish = true;
      changeValidInput();
    } else {
      console.clear();
      playField(f);
      message = multiLinePrompt(`
  -------------------------------------
  |  Please make sure you only enter  |
  |                                   |
  |                                   |
  |   "Y" to continue or "N" to end.  |
  |                                   |
  |                                   |
  | Your input is invalid, try again! |
  -------------------------------------   
               PRESS ENTER
     `)
    }
  }
}

export {finisherSequence, finish};


