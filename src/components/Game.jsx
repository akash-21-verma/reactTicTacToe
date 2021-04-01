import { useState } from "react"
import Board from "./Board"
// import { CalculateWinner } from "./Helper"
const Game = () =>{

    const calculateWinner = (square) =>{
        const condition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,5,8],
            [0,3,6],
            [2,4,6],
            [1,4,7]
        ]

        for(let i=0;i<condition.length;i++){
            const [a,b,c] = condition[i]
            if(square[a] === square[b] && square[b] === square[c]){
                return square[a];
            }
        }
        return null;
    }

    const [board,setBoard] = useState(Array(9).fill(null));
    const [isX,setX] = useState(true) 
    const winner = calculateWinner(board)
    const handleClick= (i) =>{
        const boardCopy = [...board]
        if(winner || boardCopy[i] )
            return;
        boardCopy[i] = isX ? 'X' : "O"
        setBoard(boardCopy)
        // isX = isX ? 'X' : "O"
        setX(!isX)
    }

    return(
        <div>
            <Board  square={board}  onclick={handleClick}  />
            {winner ? "winner is : " + winner  : 'next player : '+ (isX ? "turn for X" : "turn for O" )}
        </div>
    )
}

export default Game