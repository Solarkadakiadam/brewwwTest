import './header.scss';
import logo from '../../../styles/logo/logo.png';


function Header() {
  return (
    <div className="header">
        <img src={logo} alt="Brewww"></img>
    </div>
  );
}

export default Header;
