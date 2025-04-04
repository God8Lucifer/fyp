import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">ARM Dashboard</div>
        <nav className="sidebar-nav">
          <a href="#">Dashboard</a>
          <a href="#">Relationship Mapping</a>
          <a href="#">Analysis</a>
          <a href="#">Citizen Record</a>
          <a href="#">Audit Log</a>
        </nav>
        <div className="sidebar-footer">Username</div>
      </aside>

      <main className="main-content">
        <div className="content-header">
          <h1>Find Relationship</h1>
          <p>Discover Citizens Relation</p>
        </div>

        <div className="relation-form">
          <input type="text" placeholder="👤 Enter CID of person A" className="input-box"/>
          <button className="analyze-btn">Analyze</button>
          <input type="text" placeholder="👤 Enter CID of person B" className="input-box"/>
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
