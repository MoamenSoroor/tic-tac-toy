

export function History({historyObj, onHistoryClick}) {
  console.log("History Component Rendered");
  console.log(historyObj);

  function getHistoryItemText(item, index) 
  {
    if(index== 0) {
      return "Game Start";
    }

    if(item.winner) {
      return `${index}. Winner is ${item.winner}`;
    }

    return `${index}. Move of ${item.playerIsX ? 'X' : 'O'}`;
  }
  
  return (
    <div className="history-container">
      <div className="history-content">
        <h2>Game History</h2>
        <ul>
          {historyObj.map((item,index)=>
            (<li className="history-item" key={item.startCount+"-"+index} onClick={() => onHistoryClick(index)}> {getHistoryItemText(item,index)} </li>))}
        </ul>
      </div>
    </div>
  );




}