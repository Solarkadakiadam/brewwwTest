import "./card.scss";
import questionIcon from "../../../styles/icons/questionMark.png";
import Drawer from "../drawer/drawer";

function Card(props) {
  const { data, colorKey, year } = props;

  const decideBorderColor = () => {
    switch (colorKey % 4) {
      case 0:
        return "#E57373";
      case 1:
        return "#65B6F7";
      case 2:
        return "#82C786";
      case 3:
        return "#FFB74D";
      default:
        return "black";
    }
  };

  return (
    <div
      className="card"
      style={{
        borderTopColor: decideBorderColor(),
      }}
    >
      <div className="headerContainer">
        <h3>{year}</h3>
        <img src={questionIcon} alt="Any Questions?" />
      </div>
      {data.map((book) => {
        return <Drawer book={book?.obj} />;
      })}
    </div>
  );
}

export default Card;
