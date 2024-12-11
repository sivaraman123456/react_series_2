const Gameboard = ({onSelectChange,board}) => {
return (
    <ol id='game-board'>
        {board && board.map((row,rowId)=>
        Array.isArray(row)?(
            <li key={rowId}>
            <ol>
            { row && row.map((playerSymbol,colId)=>
                <li key={colId}>
                    
                    <button onClick={()=>{onSelectChange(rowId,colId)}}
                        disabled={playerSymbol !== null}  // it will disabled the the particular index[][] symbol not empty 
                        >{playerSymbol}</button>
                    </li>
            )}

            </ol>
            </li>
        ):(null)
           )}
         </ol>
  )
}
export default Gameboard