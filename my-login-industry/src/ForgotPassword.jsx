
import React, { useState } from "react";
import { api } from "./apiServices";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");

  const handleFindUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.get("/users");

      const found = data.find(
        (u) =>
          u.username === username ||
          u.email === username ||
          u.mobile === username
      );

      if (found) {
        if (!found.securityquestion || !found.securityanswer) {
          alert("Security question not found");
          return;
        }

        setUser(found);
      } else {
        alert("User not found");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();

    if (
      answer.trim().toLowerCase() !==
      String(user.securityanswer).trim().toLowerCase()
    ) {
      alert("Wrong security answer");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      await api.patch(`/users/${user.id}`, {
        password: password,
      });

      alert("Password changed successfully");
      navigate("/login");
    } catch (error) {
      alert("Password reset failed");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>

      {!user ? (
        <form onSubmit={handleFindUser}>
          <input
            type="text"
            placeholder="Username / Email / Mobile"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <br /><br />

          <button type="submit">Find Account</button>
        </form>
      ) : (
        <form onSubmit={handleReset}>
          <p>Security Question:</p>

          <h4>{user.securityquestion}</h4>

          <input
            type="text"
            placeholder="Enter Security Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />

          <br /><br />

          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          <br /><br />

          <button type="submit">Reset Password</button>
        </form>
      )}

      <br />

      <button onClick={() => navigate("/login")}>
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
