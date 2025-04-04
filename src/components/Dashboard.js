import { useState } from "react";
import "./Dashboard.css";
import { Menu, X, Home, Users, FileText, Activity, Clipboard } from "lucide-react";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home /> },
    { name: "Relationship Mapping", icon: <Users /> },
    { name: "Analysis", icon: <Activity /> },
    { name: "Citizen Record", icon: <Clipboard /> },
    { name: "Audit Log", icon: <FileText /> },
  ];

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          {!isCollapsed && <span>ARM Dashboard</span>}
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="toggle-btn">
            {isCollapsed ? <Menu /> : <X />}
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <a key={item.name} href="#">
              {item.icon} {!isCollapsed && item.name}
            </a>
          ))}
        </nav>
        <div className="sidebar-footer">
          {!isCollapsed && (
            <>
              <img src="https://via.placeholder.com/30" alt="User" className="user-avatar" />
              <span>Username</span>
            </>
          )}
        </div>
      </aside>

      <main className="main-content">
        <div className="content-header">
          <h1>Find Relationship</h1>
          <p>Discover Citizens Relation</p>
        </div>

        <div className="relation-form">
          <input type="text" placeholder="👤 Enter CID of person A" className="input-box" />
          <button className="analyze-btn">Analyze</button>
          <input type="text" placeholder="👤 Enter CID of person B" className="input-box" />
        </div>

        <button className="add-person-btn">+ Add more person</button>

        <section className="analysis-results">
          <div className="result-box">
            <h3>Relationship Analysis Result(s)</h3>
            <p>Predict relationship and evidence</p>
          </div>
          <div className="result-box">
            <h3>Analysis Result</h3>
            <p>AI-generated insights about the relationship between the two citizens</p>
            <div className="result-placeholder">Analysis result display</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
