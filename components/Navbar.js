import { NavLink } from "react-router-dom";
import logo from "../assets/images/EZTechMovieLogo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-area">
        <img src={logo} alt="EZ Tech Movie logo" className="nav-logo" />
        <h2 className="logo">StreamList</h2>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}


export default Navbar;
