import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import TrackTable from "./components/TrackTable";
import { initialFabrics } from "./data/fabrics";
import "./styles.css";

function getNextStatus(status) {
  if (status === "Pending") {
    return "Processing";
  }

  if (status === "Processing") {
    return "Quality Check";
  }

  if (status === "Quality Check") {
    return "Completed";
  }

  return "Completed";
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [fabrics, setFabrics] = useState(initialFabrics);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  function handleMoveNext(id) {
    const updatedFabrics = fabrics.map((fabric) => {
      if (fabric.id !== id) {
        return fabric;
      }

      return {
        ...fabric,
        status: getNextStatus(fabric.status),
      };
    });

    setFabrics(updatedFabrics);
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <main className="app">
      <header className="header">
        <div>
          <h1>Fabric Production Tracking System</h1>
          <p>Track fabric inventory, production stages, and quality control.</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <Dashboard fabrics={fabrics} />
      <TrackTable fabrics={fabrics} onMoveNext={handleMoveNext} />
    </main>
  );
}

export default App;
