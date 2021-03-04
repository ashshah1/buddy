import { Link } from "react-router-dom";
import './NavBar.css';


function NavBar() {
    return (
        <nav>
          <ul className="nav-container">
          <li className="header-name">
                buddy
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
    )
  };

export default NavBar;