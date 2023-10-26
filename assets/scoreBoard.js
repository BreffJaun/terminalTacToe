// F U N C T I O N   I M P O R T S
import { winner } from "./interact.js";

// CURRENT 

let currentPlayers = {
    // PLAYER X
    X: {
      wins: 0,
      loses: 0,
      draws: 0,
      moves: 0,
    },
    // PLAYER 0
    O: {
      wins: 0,
      loses: 0,
      draws: 0,
      moves: 0,
    },
};
const clearCurrentPlayer = () => {
  currentPlayers = {
    // PLAYER X
    X: {
      wins: 0,
      loses: 0,
      draws: 0,
      moves: 0,
    },
    // PLAYER 0
    O: {
      wins: 0,
      loses: 0,
      draws: 0,
      moves: 0,
    },
  }
}

let showCurWinnerStats = (winner) => {
  let curPlayerWin = currentPlayer[winner] 
  let curPlayerMov = null;
  
}


// ALL TIME 

const allTimePlayers = {};

export {
  currentPlayers, 
  clearCurrentPlayer, 
  allTimePlayers
};