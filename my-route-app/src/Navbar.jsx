import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Routing App</h2>

      <div className="nav-links">
        <Link to="/Home">Home</Link>{"|"}
        <Link to="/mobile">Mobile</Link>{"|"}
        <Link to="/kinds">Kids</Link>
      </div>
    </nav>
  );
};

export default Navbar;