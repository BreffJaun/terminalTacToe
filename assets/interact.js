// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import multiLinePrompt from '../multiLinePrompt.js';
import playField from './playfield.js';
import {finisherSequence} from './finisherSequece.js';
import { currentPlayers, allTimePlayers } from './scoreBoard.js';

// C O D E
let f = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let player = "X";
let winner = "";
let isDraw = false;
let validInput = false;
const changeValidInput = () => {
  validInput = true;
}
const interact = () => {
  let alreadyTypedIn = "";
  let sideChange = "";
  let message = "";
  let interaction = ""; 
  let inputArray = [];
  f = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  playField(f);
  while (
    interaction !== "1" &&
    interaction !== "2" &&
    interaction !== "3" &&
    interaction !== "4" &&
    interaction !== "5" &&
    interaction !== "6" &&
    interaction !== "7" &&
    interaction !== "8" &&
    interaction !== "9" &&
    interaction === ""
    ) {
      while (!validInput) {
        console.clear();
        playField(f);
        interaction = prompt(`Enter a number from 1 - 9 to place your symbol: `);
        if (inputArray.includes(interaction)) {
          alreadyTypedIn = multiLinePrompt(`
  --------------------------------------
  |    These space in the game has     |
  |                                    |
  |                                    |
  |  already been used by one of you,  |
  |                                    |
  |                                    |
  |        choose a free space         |
  -------------------------------------- 
              PRESS ENTER
          `)
        } else {
        if (!isNaN(interaction) && parseInt(interaction) >= 1 && parseInt(interaction) <= 9) {
          console.clear()
          playField(f);
          if (interaction === "7"){      
            f[6] = player;
            inputArray.push(interaction);                   
          } else if (interaction === "4"){                
            f[3] = player; 
            inputArray.push(interaction);                      
          } else if (interaction === "1"){                
            f[0] = player;  
            inputArray.push(interaction);                     
          } else if (interaction === "8"){                
            f[7] = player;   
            inputArray.push(interaction);                    
          } else if (interaction === "5"){                
            f[4] = player;
            inputArray.push(interaction);                     
          } else if (interaction === "2"){                
            f[1] = player; 
            inputArray.push(interaction);                     
          } else if (interaction === "9"){                
            f[8] = player;
            inputArray.push(interaction);    
          } else if (interaction === "6"){                
            f[5] = player; 
            inputArray.push(interaction);                    
          } else if (interaction === "3"){                
            f[2] = player; 
            inputArray.push(interaction);                     
          }

          if (player === "X") {
            player = "O";
            currentPlayers.xMoves += 1;
          } else {
            player = "X";
            currentPlayers.oMoves += 1;
          }

          // CHECK IF SOMEONE ALREADY WINS
          if (
              (f[6] === "X" && f[3] === "X" && f[0] === "X") || 
              (f[7] === "X" && f[4] === "X" && f[1] === "X") ||
              (f[8] === "X" && f[5] === "X" && f[2] === "X") ||
              (f[6] === "X" && f[7] === "X" && f[8] === "X") ||
              (f[3] === "X" && f[4] === "X" && f[5] === "X") ||
              (f[0] === "X" && f[1] === "X" && f[2] === "X") ||
              (f[6] === "X" && f[4] === "X" && f[2] === "X") ||
              (f[8] === "X" && f[4] === "X" && f[0] === "X")) {
            console.clear();
            playField(f);
            winner = "X";
            player = "X";
            // SET WINNER AND LOSER STATS
            currentPlayers.xWins += 1;
            currentPlayers.oLoses += 1;
            finisherSequence();
          } else if (
            (f[6] === "O" && f[3] === "O" && f[0] === "O") || 
            (f[7] === "O" && f[4] === "O" && f[1] === "O") ||
            (f[8] === "O" && f[5] === "O" && f[2] === "O") ||
            (f[6] === "O" && f[7] === "O" && f[8] === "O") ||
            (f[3] === "O" && f[4] === "O" && f[5] === "O") ||
            (f[0] === "O" && f[1] === "O" && f[2] === "O") ||
            (f[6] === "O" && f[4] === "O" && f[2] === "O") ||
            (f[8] === "O" && f[4] === "O" && f[0] === "O")) {
            console.clear(); 
            playField(f);
            winner = "O";
            player = "X";
            // SET WINNER AND LOSER STATS
            currentPlayers.oWins += 1;
            currentPlayers.xLoses += 1;
            finisherSequence();
          } else if (
            (f[6] === "X" || f[6] === "O") && 
            (f[7] === "X" || f[7] === "O") &&
            (f[8] === "X" || f[8] === "O") &&
            (f[3] === "X" || f[3] === "O") &&
            (f[4] === "X" || f[4] === "O") &&
            (f[5] === "X" || f[5] === "O") &&
            (f[0] === "X" || f[0] === "O") &&
            (f[1] === "X" || f[1] === "O") &&
            (f[2] === "X" || f[2] === "O") 
          ) {
            console.clear();
            playField(f);
            isDraw = true;
            player = "X";
            // SET WINNER AND LOSER STATS
            currentPlayers.oDraws += 1;
            currentPlayers.xDraws += 1;
            finisherSequence();
          } else {
            console.clear();
            playField(f);
            sideChange = multiLinePrompt(`
  -------------------------------------
  |      ATTENTION:   Player "${player}"      |
  |                                   |
  |                                   |
  |        Now it's your turn         |
  |                                   |
  |                                   |
  |     Click ENTER to continue       |
  -------------------------------------  
              PRESS ENTER  
            `)
            interaction = "";
            validInput = false; 
            console.clear();    
          }
        } else {
          console.clear();
          playField(f);
          message = multiLinePrompt(`
  -------------------------------------
  |  Please make sure you only enter  |
  |                                   |
  |                                   |
  |        numbers between 1 - 9      |
  |                                   |
  |                                   |
  |    It's best to use your NumPad   |
  -------------------------------------   
              PRESS ENTER
        `)
        }  
      }   
    }
  } 
}
export {interact, f, winner, isDraw, player, validInput, changeValidInput};


// [" ", " ", " ", " ", " ", " ", " ", " ", " ",];
//   0    1    2    3    4    5    6    7    8
//   |     -------------     |
// |     | ${f[6]} | ${f[7]} | ${f[8]} |     |
// |     -------------     |
// |     | ${f[3]} | ${f[4]} | ${f[5]} |     |
// |     -------------     |
// |     | ${f[0]} | ${f[1]} | ${f[2]} |     |


