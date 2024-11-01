import { useState } from 'react'
import './App.css'

const turns = {
  X: 'x',
  O: 'o'
}
const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const classNameS = `square ${isSelected ? 'is-selected' : '' }`
const handleClick = () => {
  updateBoard(index)
}

  return (
    <div onClick = {handleClick} className = {classNameS}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.X)
  const [winner, setWinner] = useState(null)
  //null = initial
  //turn.X || turn.O = game over
  //false = tie

  const checkWinner = (boardToCheck) => {
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

  const updateBoard = (index) => {

    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } 
    else if(checkEnd(newBoard)) {
      setWinner(false)
    }
  }

  const checkEnd = (newBoard) => {
    return newBoard.every((index) => index !== null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe{console.log(board)}</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key = {index}
                index = {index}
                updateBoard = {updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = {turn === turns.X}>{turns.X}</Square>
        <Square isSelected = {turn === turns.O}>{turns.O}</Square>
      </section>

      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false
                    ? 'Tie.'
                    : 'The winner is:'
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Reset</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App
