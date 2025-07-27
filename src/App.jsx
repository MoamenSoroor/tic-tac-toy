import './App.css'
import { Board } from './components/Board';
import {Header} from './components/Header'
import { MainContent } from './components/MainContent'
import { useState } from 'react';


 function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



function App() {

  const [gameObj, setGameObj] = useState({
    start: false, 
    startCount: 0, 
    playerIsX: true, 
    squares: Array(9).fill(null),
    winner: null,
    
    history: [],  
  });

  function handleGameStart(){
    
    let nextPlayer = gameObj.winner != null ? gameObj.winner == "X": gameObj.playerIsX;

    let newobj = {...gameObj, 
      start: true, 
      startCount: gameObj.startCount + 1, 
      playerIsX: nextPlayer,
      squares: Array(9).fill(null),
      winner: null,
    };
    setGameObj(newobj);
    console.log( newobj);
  }

  function onSquareClicked(index){
   if(gameObj.squares[index] || gameObj.winner) {
      return; // Ignore if square is already filled or game is over
    }

    const newSquares = gameObj.squares.slice();
    newSquares[index] = gameObj.playerIsX ? 'X' : 'O';
    const newWinner = calculateWinner(newSquares);

    setGameObj({...gameObj, squares: newSquares, playerIsX: !gameObj.playerIsX, winner: newWinner});

  }

  return (
    <>
    <Header gameObj={gameObj} />
    <MainContent gameObj={gameObj} onGameStart={handleGameStart}  />
    <Board gameObj={gameObj} onSquareClicked={onSquareClicked} />
    <div style={{height: "200px"}}></div>
    </>
  )
}

export default App
