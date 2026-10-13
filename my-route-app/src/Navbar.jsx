import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <h2 >Routing App</h2>

      <div >
        <Link to="/Home">Home</Link>{"|"}
        <Link to="/mobile">Mobile</Link>{"|"}
        <Link to="/kinds">Kids</Link>
      </div>
    </nav>
  );
};

export default Navbar;
