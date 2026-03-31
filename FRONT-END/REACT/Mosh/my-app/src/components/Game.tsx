import React, { useState } from 'react'

const Game = () => {
    const [game,setGame] = useState({
        id:1,
        player: {
            name:'Jhon'
        }
    });

    const handleGameClick = () => {
        setGame({...game, player: {...game.player,name : "Bob"}})
    }

  return (
    <div>Game</div>
  )
}

export default Game