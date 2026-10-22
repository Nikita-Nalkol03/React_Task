import {
  NavLink,
  Outlet,
  useNavigate
} from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "Student";

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/login", { replace: true });
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Student App</h2>

        <NavLink to="/dashboard" end>
          Home
        </NavLink>

        <NavLink to="/dashboard/profile">
          Profile
        </NavLink>

        <NavLink to="/dashboard/settings">
          Settings
        </NavLink>

        <button onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="main-content">
        <h2>Welcome, {username}!</h2>

        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;