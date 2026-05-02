import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
      return;
    }

    alert("Invalid username or password");
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Production Tracking Login</h1>
        <p>Use admin / 1234 for demo access.</p>

        <label>Username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="admin"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="1234"
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
