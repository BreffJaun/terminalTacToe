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

let curWinnerStats = (winner) => {
  let curPlayerWin = String(currentPlayers[winner].wins); 
  let curPlayerMov = String(currentPlayers[winner].moves);
  
  if (curPlayerWin.length === 1) {
    curPlayerWin = `00${curPlayerWin}`;
  } else if (curPlayerWin.length === 2) {
    curPlayerWin = `0${curPlayerWin}`;
  }

  if (curPlayerMov.length === 1) {
    curPlayerMov = `00${curPlayerMov}`;
  } else if (curPlayerMov.length === 2) {
    curPlayerMov = `0${curPlayerMov}`;
  } 

  return [curPlayerWin, curPlayerMov];
}

// COMPARE PLAYERS FOR STATS AFTER GAME FINISH
function comparePlayers(playerA, playerB) {
  if (playerA.wins !== playerB.wins) {
    return playerB.wins - playerA.wins; // Sort by number of wins (descending)
  }
  if (playerA.loses !== playerB.loses) {
    return playerA.loses - playerB.loses; // Sort by number of loses (ascending)
  }
  if (playerA.draws !== playerB.draws) {
    return playerB.draws - playerA.draws; // Sort by number of draws (descending)
  }
  return playerB.moves - playerA.moves; // Sort by number of moves (descending)
}

// Get an array of sorted players
let sortedPlayers = Object.entries(currentPlayers).sort(([playerA, statsA], [playerB, statsB]) => {
  return comparePlayers(statsA, statsB);
});

const leadingZeros = (num) => {
  let numToString = String(num); 
  if (numToString.length === 1) {
    numToString = `00${numToString}`;
  } else if (numToString.length === 2) {
    numToString = `0${numToString}`;
  }
  return numToString;
}

export {
  currentPlayers, 
  clearCurrentPlayer, 
  curWinnerStats,
  sortedPlayers,
  leadingZeros,
};