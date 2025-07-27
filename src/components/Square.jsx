
export function Square({value, onSquareClicked}) {
  return (
    <button className="general-btn" onClick={onSquareClicked}  >
      {value}
    </button>
  );
}