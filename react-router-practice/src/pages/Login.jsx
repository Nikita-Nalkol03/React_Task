
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username.trim());

      navigate("/dashboard");
    } else {
      alert("Please enter username and password");
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Student Login</h1>
        <p>Welcome to your dashboard</p>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;