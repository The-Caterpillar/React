import React, {useState} from "react";
import Square from './Square';
import { Button } from "bootstrap";

const Board = () => {

    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn] = useState(true);

    // console.log("State: ",state);

    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let logic of winnerLogic)
        {
            const [a,b,c] = logic;
            if( state[a]!=null && state[a] === state[b] && state[a] === state[c])
            {
                return state[a];
            }
        }
    return null; // If no winner
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        // console.log("Clicked on index: ", index);

        if(state[index]!=null)
        {
            if(state[0]!=null && state[1]!=null && state[2]!=null
                && state[3]!=null && state[4]!=null && state[5]!=null
                && state[6]!=null && state[7]!=null && state[8]!=null )
                {
                    alert(`Nobody Won, It's a tie!!`);
                    setState(Array(9).fill(null));
                    setIsXTurn(true);
                }
            return;
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : '0';
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const restartGame = () => {
        setState(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className="Board-Container">

           {
            isWinner ?
                <>
                    <p>{isWinner} wins!!</p>
                    <button onClick={() => {restartGame()}} >Play Again</button>
                </>
            : <>
            <div className="Board-row">
                <Square onClick={ () => handleClick(0) } value={state[0]} />
                <Square onClick={ () => handleClick(1) }  value={state[1]}/>
                <Square onClick={ () => handleClick(2) } value={state[2]}/>
            </div>
            <div className="Board-row">
                <Square onClick={ () => handleClick(3) } value={state[3]}/>
                <Square onClick={ () => handleClick(4) } value={state[4]}/>
                <Square onClick={ () => handleClick(5) } value={state[5]}/>
            </div>
            <div className="Board-row">
                <Square onClick={ () => handleClick(6) } value={state[6]}/>
                <Square onClick={ () => handleClick(7) } value={state[7]}/>
                <Square onClick={ () => handleClick(8) } value={state[8]}/>
            </div>
            </>
            }

        </div>
    );
};

export default Board;