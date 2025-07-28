import './App.css'
import { Board } from './components/Board';
import {Header} from './components/Header';
import { History } from './components/History';
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
      });

    const [historyObj, setHistoryObj] = useState([gameObj]);


  function handleGameStart(){
    
    let nextPlayer = gameObj.winner != null ? gameObj.winner == "X": gameObj.playerIsX;

    let newobj = {...gameObj, 
      start: true, 
      startCount: gameObj.startCount + 1, 
      playerIsX: nextPlayer,
      squares: Array(9).fill(null),
      winner: null,
    };

    setHistoryObj([newobj]);

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
    const newobj = {...gameObj, squares: newSquares, playerIsX: !gameObj.playerIsX, winner: newWinner};
    setGameObj(newobj);
    setHistoryObj([...historyObj, gameObj]); // Add the new game state to history

  }

  function onHistoryClick(index) {
    let targetHistory = historyObj[index];
    if (!targetHistory) return; // If no history item found

    if(gameObj.winner != null) {
      return;
    }

    // Restore the game state to the clicked history item
    setGameObj(targetHistory);
    let newHistory = historyObj.splice(0, index + 1); // Keep history up to the clicked item
    setHistoryObj(newHistory); // Remove clicked history
  }

    let status = "";
  if(gameObj.winner){
    status =  <div className="alert-status"> Winner is  {gameObj.winner} </div>;
  }else{
    status = <div className="alert-status" >Current Player is (  {gameObj.playerIsX? "X":"O"} ) </div>; ;
  }

  return (
    <>
    <Header gameObj={gameObj} />
    <MainContent gameObj={gameObj} onGameStart={handleGameStart}  />
    <hr />
    <div className='game-container'>
      <div className='game-left'>       
        <div className="game-info">{status}</div>
        <Board gameObj={gameObj} onSquareClicked={onSquareClicked} />
      </div>

      <History historyObj={historyObj} onHistoryClick={onHistoryClick} />

    </div>
    <div style={{height: "200px"}}></div>
    </>
  )
}

export default App
