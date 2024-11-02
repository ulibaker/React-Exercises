import { winnerCombos } from "../src/consts"

export const checkWinner = (boardToCheck) => {
    for(const combo of winnerCombos) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }