
import {Square} from './Square';



export function Board( {gameObj, onSquareClicked}) {

  let status = "";
  if(gameObj.winner){
    status =  <div className="alert-status"> Winner is  {gameObj.winner} </div>;
  }else{
    status = <div className="alert-status" >Current Player is (  {gameObj.playerIsX? "X":"O"} ) </div>; ;
  }

  return (
    <>
    <div> {status}  </div>
    <div className="board-container">
      <div className="board">
          <Square value={gameObj.squares[0]} onSquareClicked={()=>onSquareClicked(0)} />
          <Square value={gameObj.squares[1]}  onSquareClicked={()=>onSquareClicked(1)} />
          <Square value={gameObj.squares[2]}  onSquareClicked={()=>onSquareClicked(2)} />

          <Square value={gameObj.squares[3]}  onSquareClicked={()=>onSquareClicked(3)} />
          <Square value={gameObj.squares[4]}  onSquareClicked={()=>onSquareClicked(4)} />
          <Square value={gameObj.squares[5]}  onSquareClicked={()=>onSquareClicked(5)} />

          <Square value={gameObj.squares[6]}  onSquareClicked={()=>onSquareClicked(6)} />
          <Square value={gameObj.squares[7]}  onSquareClicked={()=>onSquareClicked(7)} />
          <Square value={gameObj.squares[8]}  onSquareClicked={()=>onSquareClicked(8)} />
      </div>
    </div>
    </>
  );
}