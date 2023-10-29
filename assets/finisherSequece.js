// P A C K A G E   I M P O R T S
// import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import multiLinePrompt from '../multiLinePrompt.js';

import { ticTacToe, changeStart } from '../index.js';
import { f, winner, isDraw, validInput, changeValidInput } from '../assets/interact.js';
import playField from './playfield.js';
import { currentPlayers, clearCurrentPlayer, curWinnerStats, sortedPlayers, leadingZeros} from './scoreBoard.js';

let finish = false;

const finisherSequence = () => {
  let validAnswer = false; // "Y" or "N" to choose play again
  // PREDEFINING PROMPT VARIABLES
  let drawMess = "";
  let congrats = "";
  let playAgain = "";
  let greatChoice = "";
  let message = "";
  let viewStats = false;
  let showStats = "";
  let smallOrBig = "";
  let viewBigOrSmall = false;
  let statsSmall = "";
  let statsBig = "";

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
  |         PLAYER >>${winner}<< WIN !        |
  |                                   |
  |                                   |
  |     MOVES: ${curWinnerStats(winner)[1]}  ||   WINS: ${curWinnerStats(winner)[0]}    |
  -------------------------------------   
              PRESS ENTER
    `)
  while (!viewStats) {
    console.clear();
    playField(f);
    showStats = multiLinePrompt(`
  -------------------------------------
  |       WANT TO SEE THE STATS ?     |
  |                                   |
  |                                   |
  |      TYPE IN "Y" to see stats     |
  |                                   |
  |                                   |
  |      OR "N" to skip the stats!    |
  -------------------------------------   
             AND PRESS ENTER
    `).toLowerCase();
    if (showStats === "y") {
      console.clear();
      playField(f);
      viewStats = true;
      while (!viewBigOrSmall) {
        smallOrBig = multiLinePrompt(`
  -------------------------------------
  |   PRESS "S" for shortened stats   |
  |                                   |
  |                                   |
  |                OR                 |
  |                                   |
  |                                   |
  |   PRESS "D" for detailed stats    |
  -------------------------------------   
              PRESS ENTER
          `).toLowerCase(); 
      if (smallOrBig === "s") {
        console.clear();
        playField(f)
        viewBigOrSmall = true;
        statsSmall = multiLinePrompt(`
  -------------------------------------
  |     TOTAL PLAYER STATISTICS       |
  |                                   |
  |  |  P  |  W  |  L  |  D  |  M  |  |
  |  -------------------------------  |
  |  |  ${sortedPlayers[0][0]}  | ${leadingZeros(sortedPlayers[0][1].wins)} | ${leadingZeros(sortedPlayers[0][1].loses)} | ${leadingZeros(sortedPlayers[0][1].draws)} | ${leadingZeros(sortedPlayers[0][1].moves)} |  |
  |  |  ${sortedPlayers[1][0]}  | ${leadingZeros(sortedPlayers[1][1].wins)} | ${leadingZeros(sortedPlayers[1][1].loses)} | ${leadingZeros(sortedPlayers[1][1].draws)} | ${leadingZeros(sortedPlayers[1][1].moves)} |  |
  |                                   |
  |                                   |
  |                                   | 
  -------------------------------------   
              PRESS ENTER
        `);
      } else if (smallOrBig === "d") {
        console.clear();
        playField(f)
        viewBigOrSmall = true
        statsBig = multiLinePrompt(`
  -------------------------------------------------------------------------
  |          T O T A L      P L A Y E R      S T A T I S T I C S          |
  |                                                                       |
  |     |   PLAYER  |   WINS    |   LOSES   |   DRAWS   |   MOVES   |     |   
  |     -------------------------------------------------------------     |
  |     |     ${sortedPlayers[0][0]}     |    ${leadingZeros(sortedPlayers[0][1].wins)}    |    ${leadingZeros(sortedPlayers[0][1].loses)}    |    ${leadingZeros(sortedPlayers[0][1].draws)}    |    ${leadingZeros(sortedPlayers[0][1].moves)}    |     |
  |     |     ${sortedPlayers[1][0]}     |    ${leadingZeros(sortedPlayers[1][1].wins)}    |    ${leadingZeros(sortedPlayers[1][1].loses)}    |    ${leadingZeros(sortedPlayers[1][1].draws)}    |    ${leadingZeros(sortedPlayers[1][1].moves)}    |     |
  |                                                                       |
  |                                                                       |
  |                                                                       | 
  -------------------------------------------------------------------------   
                                  PRESS ENTER
      `)
      } else {
        message = multiLinePrompt(`
  -------------------------------------
  |  Please make sure you only enter  |
  |                                   |
  |            "S" OR "D"             |
  |                                   |
  |    for short or detailed stats!   |
  |                                   |
  | Your input is invalid, try again! |
  -------------------------------------   
              PRESS ENTER
       `)
      }
    }
    } else if (showStats === "n"){
      viewStats = true;
    } else {
      message = multiLinePrompt(`
  -------------------------------------
  |  Please make sure you only enter  |
  |                                   |
  |                                   |
  | "Y" to show or "N" to skip stats. |
  |                                   |
  |                                   |
  | Your input is invalid, try again! |
  -------------------------------------   
              PRESS ENTER
      `)
      }
    }
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


