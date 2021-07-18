import "./spinner.scss";
import Loader from "react-loader-spinner";

/**
 * This is the spinner component
 */
function Spinner() {
  return (
    <div className="spinner">
      <Loader type="Circles" color="#373A3B" height={30} width={30} />
      <h4>Loading...</h4>
    </div>
  );
}

export default Spinner;
