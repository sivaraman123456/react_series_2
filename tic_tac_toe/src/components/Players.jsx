import React, { useState } from 'react'

const Players = ({name,symbol,is_active,onChangeName}) => {

  const [editName,setEditname]=useState(name);
const [isEditing ,setEditing]=useState(false)


    function handleEditing(){
      console.log("Name:",editName);
      
setEditing(isEditing=>!isEditing)
if(editName){
onChangeName(symbol,editName)
}
    }
let playerName=   <span className="player-name">{editName}</span>;

if(isEditing)
{
  playerName=<input type='text' placeholder='Player name' defaultValue={editName} onChange={(e)=>{setEditname(e.target.value)}} required/>

}

  return (
   

<li className={is_active ? "active" : ""}>
  <span className="player">
    {playerName}
  <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={handleEditing}>{!isEditing ? "Edit" :"Save"}</button>
  
</li>

  
  )
}

export default Players