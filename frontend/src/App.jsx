import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Reports from "./components/Reports";
import TrackTable from "./components/TrackTable";
import fabricsData from "./data/fabrics";
import "./styles.css";

const statusFlow = ["Pending", "Processing", "Quality Check", "Completed"];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [fabrics, setFabrics] = useState(fabricsData);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActivePage("dashboard");
  };

  const handleMoveNext = (id) => {
    setFabrics((prevFabrics) =>
      prevFabrics.map((fabric) => {
        if (fabric.id !== id) {
          return fabric;
        }

        const currentIndex = statusFlow.indexOf(fabric.status);
        const nextIndex =
          currentIndex < statusFlow.length - 1 ? currentIndex + 1 : currentIndex;

        return {
          ...fabric,
          status: statusFlow[nextIndex],
        };
      })
    );
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-shell">
      <div className="page-container">
        <header className="page-header">
          <div>
            <p className="page-kicker">PROTRACK</p>
            <h1>Fabric Production Tracking System</h1>
            <p className="page-subtitle">
              Track fabric inventory, production stages, and quality control.
            </p>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <nav className="page-tabs">
          <button
            className={activePage === "dashboard" ? "tab-button active" : "tab-button"}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={activePage === "reports" ? "tab-button active" : "tab-button"}
            onClick={() => setActivePage("reports")}
          >
            Reports
          </button>
        </nav>

        {activePage === "dashboard" && (
          <>
            <Dashboard fabrics={fabrics} />
            <TrackTable fabrics={fabrics} onMoveNext={handleMoveNext} />
          </>
        )}

        {activePage === "reports" && <Reports fabrics={fabrics} />}
      </div>
    </div>
  );
}

export default App;
