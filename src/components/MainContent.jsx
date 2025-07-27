
export function MainContent({gameObj, onGameStart}) {

  let contentBeforeStart = (
    <>
    <div className="info">
      <h2>Welcome to the Tic Tac Toy Game!</h2>
      <p>Get ready to play the classic Tic Tac Toe game with a twist!</p>
      <p>Choose your side, make your moves, and try to outsmart your opponent!</p>
      <p>Have fun and may the best player win!</p>  
    </div>
    <div className="start-game-button">
      <button className="start-game-button general-btn" onClick={onGameStart}>
          Start Game
      </button>
    </div>
    </>
  );

  let contentAfterStart = (
    <>
      <div className="info">
        <h2>Game in Progress!</h2>
        <p>Make your move and try to win!</p>
      </div>
      <div className="active-game-button">
        <button className="start-game-button general-btn" onClick={onGameStart}>
            Start New Game
        </button>
      </div>

    </>
  )

  return (
    <main className="main-content">
      {gameObj.start ? contentAfterStart : contentBeforeStart}
    </main>
  )
}