import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="logo">
          <span className="logo-text">Stackly</span>
        </Link>
      </div>

      <nav className="header-center">
        <a href="#design" className="nav-link">Design</a>
        <a href="#product" className="nav-link">Product</a>
        <a href="#plans" className="nav-link">Plans</a>
        <a href="#business" className="nav-link">Business</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#help" className="nav-link">Help</a>
      </nav>

      <div className="header-right">
        <Link to="/login" className="header-button login">
          Log in
        </Link>

        <Link to="/signup" className="header-button signup">
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
