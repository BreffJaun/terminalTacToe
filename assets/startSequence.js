// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; 
const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import multiLinePrompt from '../multiLinePrompt.js';

// C O D E

let startSequence = () => {
  let greeting = multiLinePrompt(`
  -------------------------------------
  |     Welcome to a "TIC TAC TOE"    |
  |                                   |
  |                                   |
  |       game for the terminal       |
  |                                   |
  |                                   |
  |           Have fun :D             |
  -------------------------------------
              PRESS ENTER
    `);
    console.clear();
    let player = multiLinePrompt(`
  -------------------------------------
  |     This is a 2 Player game       |
  |                                   |
  |                                   |
  |   Player 1 "X" starts and then    |
  |                                   |
  |                                   |
  |   takes turn with Player 2 "O"    |
  -------------------------------------
              PRESS ENTER
  `)
    console.clear();
    let numPad = multiLinePrompt(`
  -------------------------------------
  |    The numbers in your NumPad     |
  |                                   |
  |                                   |
  |  reflect the "TIC TAC TOE" Board  |
  |                                   |
  |                                   |
  |            like this!             |
  -------------------------------------
              PRESS ENTER
  `)
    console.clear();
    let numPad2 = multiLinePrompt(`
  ------------------------------------- 
  |           -------------           |
  |           | 7 | 8 | 9 |           |
  |           -------------           |
  |           | 4 | 5 | 6 |           |
  |           -------------           |
  |           | 1 | 2 | 3 |           |
  |           -------------           |
  -------------------------------------
              PRESS ENTER
  `)
  console.clear();
}
export default startSequence;



