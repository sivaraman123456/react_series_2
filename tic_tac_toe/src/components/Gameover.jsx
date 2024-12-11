import React from 'react'

const Gameover = ({winner,rematch}) => {
  return (
    
   <div id='game-over'>
    <h2>
        GAME OVER
    </h2>
    <p>

{winner ? `You Won the Match ${winner}`: `It's Draw`}

    </p>
    <button onClick={rematch}>
Rematch
    </button>
   </div>
  )
}

export default Gameover