import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from '../components/Square'
import { turns } from './consts'
import { checkWinner } from '../logic/board'
import { Winner } from '../components/Winner'
import { saveGame, resetGameStorage } from '../logic/storage/index.js'

function App() {
  const [board, setBoard] = useState(() => {
    const getBoardFromStorage = window.localStorage.getItem('board')
    return getBoardFromStorage ? JSON.parse(getBoardFromStorage) :
    Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const getTurnFromStorage = window.localStorage.getItem('turn')
    return getTurnFromStorage ?? turns.X
  })
  const [winner, setWinner] = useState(null)
  //null = initial
  //turn.X || turn.O = game over
  //false = tie

  const updateBoard = (index) => {

    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)
    //SAVE
    saveGame({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
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
    //DELETE SAVE FILES LOCAL STORAGE
    resetGameStorage()
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
      <Winner resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
