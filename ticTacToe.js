// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import startSequence from './assets/startSequence.js';
import { finish } from './assets/finisherSequece.js';
import { interact } from './assets/interact.js';


// C O D E
// let finish = false;
const ticTacToe = () => {
  while (!finish) {
    console.clear();
    let start = false;
    if (!start) {
      startSequence();
      start = true;
    }
    interact();
  }
}
ticTacToe();

export {ticTacToe, finish};



// SCHEME
// |     | ${f[6]} | ${f[7]} | ${f[8]} |     |
// |     -------------     |
// |     | ${f[3]} | ${f[4]} | ${f[5]} |     |
// |     -------------     |
// |     | ${f[0]} | ${f[1]} | ${f[2]} |     |