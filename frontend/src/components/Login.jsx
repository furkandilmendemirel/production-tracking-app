import { useState } from "react";
import logo from "../assets/protrack-logo.png";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-brand-panel">
          <img src={logo} alt="ProTrack Logo" className="login-logo" />
          <h1>PROTRACK</h1>
          <p className="brand-subtitle">Track. Manage. Deliver.</p>
          <p className="brand-description">
            Fabric Production Tracking System for monitoring inventory, suppliers,
            and production stages with a structured and professional interface.
          </p>
        </div>

        <div className="login-card">
          <p className="login-kicker">SECURE ACCESS</p>
          <h2>Production Tracking Login</h2>
          <p className="login-help">
            Demo access: <strong>admin</strong> / <strong>1234</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
