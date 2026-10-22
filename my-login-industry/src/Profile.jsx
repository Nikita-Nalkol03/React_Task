
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("userDetails") || "null"
  );

  const [user, setUser] = useState({
    name: savedUser?.name || "",
    username: savedUser?.username || "",
    email: savedUser?.email || "",
    mobile: savedUser?.mobile || "",
    bio: savedUser?.bio || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...savedUser,
      ...user,
    };

    localStorage.setItem(
      "userDetails",
      JSON.stringify(updatedUser)
    );

    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  if (!savedUser) {
    return (
      <div>
        <h2>Please login first</h2>
        <button onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>My Profile</h1>

      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <br />

          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <br />

          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <br />

          <input
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            placeholder="Mobile"
          />
          <br />

          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            placeholder="About me"
          />
          <br />

          <button type="submit">Save Changes</button>

          <button
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <h2>{user.name || "Your Name"}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Bio: {user.bio || "No bio added"}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>
      )}

      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
