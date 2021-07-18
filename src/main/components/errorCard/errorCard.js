import "./errorCard.scss";
import empty from "../../../styles/icons/empty.png";

/**
 * This component displays the error page
 */
function ErrorCard() {
  return (
    <div className="errorCard">
      <img src={empty} alt="Brewww"></img>
      <h1>There is no board to show</h1>
    </div>
  );
}

export default ErrorCard;
