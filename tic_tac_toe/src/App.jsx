import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Players from "./components/Players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import Gameover from "./components/Gameover";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function currentPlayerfun(previousTurn) {
  let currentPlayer = "X";
  if (previousTurn.length > 0 && previousTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [playerName,setPlayerName]=useState({
    'X':'player 1',
    'O':'player 2',
})
  const [gameTurn, setGameTurn] = useState([]);

  // const [activePlayer,setActivePlayer]=useState("X")  I removed the state
  // let gameBoard = [...initialBoard.map((array)=>[...array])];  // I cut the code from gameBoard component 

let gameBoard=initialBoard;

  // write a winnig combination code
let winner ;
for (let combination of WINNING_COMBINATIONS)
{
  
 const firstIndex= gameBoard[combination[0].row][combination[0].column]
 const secondIndex =gameBoard[combination[1].row][combination[1].column]
 const thirdIndex =gameBoard[combination[2].row][combination[2].column]

 // lets check the three index symbols equal  or not   O O O or X X X
 if (firstIndex  && firstIndex === secondIndex && secondIndex === thirdIndex)
 {
  winner =playerName[firstIndex]; // which means playerName[X] 
  
  console.log("winner");
  
 }
  
}
let Drawmatch =false;
if(gameTurn.length === 9 && !winner){

  
 Drawmatch = true;
}


  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player; // this update the player symbol
   
  }
  const activePlayer = currentPlayerfun(gameTurn);
  function handleSquare(rowIndex, colIndex) {

console.log("rowIndex:",rowIndex,"colIndex:",colIndex);

    setGameTurn((previousTurn) => {
      let currentPlayer = currentPlayerfun(previousTurn);
      console.log("currentPlayer:",currentPlayer);
      
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurn,
      ];
      console.log("update:",updatedTurn);
      
      return updatedTurn;
    }); // we pass the latest turn and previous  turn
  
    
  }

  console.log("gameTurn:",gameTurn);
  
 function gameRematch()
{
setGameTurn([])
  console.log("@@rematch:",gameTurn);
  
}

// change player name
function changePlayerName(symbol,newPlayer)
{
setPlayerName((prevName)=>{
  return {...prevName,[symbol]:newPlayer}   // this line can't remove another player name because
  // One player only  change at a time
})
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            name={"Player 1"}
            symbol={"X"}
            is_active={activePlayer === "X"}
            onChangeName={changePlayerName}
          />
          <Players
            name={"Player 2"}
            symbol={"O"}
            is_active={activePlayer === "O"}
            onChangeName={changePlayerName}

          />
        </ol>
        {/* {winner && <p>You WON {winner} !</p>} */}
       {(winner || Drawmatch) && <Gameover winner={winner} rematch={gameRematch}/>} 
        <Gameboard onSelectChange={handleSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
