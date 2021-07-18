import "./card.scss";
import questionIcon from "../../../styles/icons/questionMark.png";

function Card(props) {
  console.log(props.data, "data bu");
  const { data } = props;

  const decideBorderColor = () => {
    switch (data[0].first_publish_year % 4) {
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
        <h3>{data[0].first_publish_year}</h3>
        <img src={questionIcon} alt="Any Questions?" />
      </div>
      {data.map((book) => {
        return <div>{book.first_publish_year}</div>;
      })}
    </div>
  );
}

export default Card;
