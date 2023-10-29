#!/usr/bin/env node

// P A C K A G E   I M P O R T S
// import promptSync from 'prompt-sync'; const prompt = promptSync();

// F U N C T I O N   I M P O R T S
import startSequence from './assets/startSequence.js';
import { finish } from './assets/finisherSequece.js';
import { interact } from './assets/interact.js';


// C O D E
let start = false;
const changeStart = () => {
  start = true;
}
const ticTacToe = () => {
  while (!finish) {
    console.clear();
    if (!start) {
      startSequence();
      start = true;
    }
    interact();
  }
}
ticTacToe();

export {ticTacToe, finish, changeStart};



