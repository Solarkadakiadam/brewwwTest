import Header from "../layout/header/header";
import Body from "../layout/body/body";
import "./board.scss";
/**
 * This Component Works as the main page.
 */
function Board() {
  return (
    <div className="board">
      <Header />
      <Body />
    </div>
  );
}

export default Board;
