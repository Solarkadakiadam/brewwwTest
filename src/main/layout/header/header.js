import "./header.scss";
import logo from "../../../styles/logo/logo.png";

/**
 * This component is the shared header all over the app
 */
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Brewww"></img>
    </div>
  );
}

export default Header;
