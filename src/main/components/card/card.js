import "./card.scss";
import questionIcon from "../../../assets/icons/questionMark.png";
import Drawer from "../drawer/drawer";
import Helpers from "../../helper/helper";

/**
 * This is the card component that represent the data
 */
function Card(props) {
  const { data, colorKey, year } = props;

  console.log(data);

  const renderDrawers = () => {
    return data.map((book) => {
      return <Drawer key={book?.obj?.key} book={book?.obj} />;
    });
  };

  return (
    <div
      className="card"
      style={{
        borderTopColor: Helpers.decideBorderColor(colorKey),
      }}
    >
      <div className="headerContainer">
        <h3>{year}</h3>
        <img src={questionIcon} alt="Any Questions?" />
      </div>
      {renderDrawers()}
    </div>
  );
}

export default Card;
