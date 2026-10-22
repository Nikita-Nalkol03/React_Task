function Profile() {
  const username =
    localStorage.getItem("username") || "Student";

  return (
    <div className="content-card">
      <h1>My Profile</h1>
      <p>Username: {username}</p>
      <p>Course: React JS</p>
      <p>Role: Student</p>
    </div>
  );
}

export default Profile;