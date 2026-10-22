function Settings() {
  return (
    <div className="content-card">
      <h1>Settings</h1>
      <p>Manage your account settings.</p>

      <label>
        <input type="checkbox" defaultChecked />
        Enable notifications
      </label>
    </div>
  );
}

export default Settings;