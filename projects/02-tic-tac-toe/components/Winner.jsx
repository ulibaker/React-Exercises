import { Square } from "./Square"
export function Winner ({ winner, resetGame }) {
    if(winner === null) return null

    return (
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