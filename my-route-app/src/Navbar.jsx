import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <h2 >Routing App</h2>

      <div >
        <NavLink to="/Home">Home</NavLink>{"|"}
        <NavLink to="/mobile">Mobile</NavLink>{"|"}
        <NavLink to="/kinds">Kids</NavLink>{"|"}

        <NavLink to="/Login">Login</NavLink>{" | "}
        <NavLink to="/dashboard">Dashboard</NavLink>{ " | "}
        <NavLink to={"/profile"}>Profile</NavLink> {" | "}
            <NavLink to={"/message"}>Messages</NavLink> {" | "}

      </div>
    </nav>
  );
};

export default Navbar;
