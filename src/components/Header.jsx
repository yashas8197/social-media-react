import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container pt-4">
        <h1 className="display-3 text-light">My Social Media</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/profile'>Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
