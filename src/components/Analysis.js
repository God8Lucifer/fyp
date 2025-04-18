import React from "react";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="relationship-container">
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <p>
            <a href="#">ARM Dashboard</a>
          </p>
          <hr />
        </div>
        <div className="sidebar-nav">
          <nav>
            <a href="#">
              <img src="/home.png" className="icon" alt="Home" />
              <span>Dashboard</span>
            </a>
            <a href="#">
              <img src="/rm icon.png" className="icon" alt="Relationship Mapping" />
              <span>Relationship Mapping</span>
            </a>
            <a href="#">
              <img src="/ai icon.png" className="icon" alt="Analysis" />
              <span>Analysis</span>
            </a>
            <a href="#">
              <img src="/record icon.png" className="icon" alt="Citizen Record" />
              <span>Citizen Record</span>
            </a>
            <a href="#">
              <img src="/audit icon.png" className="icon" alt="Audit Log" />
              <span>Audit Log</span>
            </a>
          </nav>
        </div>
        <div className="sidebar-footer">
          <img src="/profile.jpg" className="user-img" alt="User profile" />
          <p>Username</p>
        </div>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h1>Find Relationship</h1>
          <p>Quick Relationship Analyzer</p>
        </div>
        <div className="form-header">
          <h1>Discover Citizens Relation</h1>
          <p>Enter CIDs to discover how they might be related</p>
        </div>
        <div className="relation-form">
          <input type="text" placeholder="👤 Enter CID of person A" className="input-box" />
          <button className="analyze-btn">Analyze</button>
          <input type="text" placeholder="👤 Enter CID of person B" className="input-box" />
        </div>
        <section className="analysis-results">
          <div className="result-box1">
            <h3>Relationship Analysis Result(s)</h3>
            <p>Predict relationship and evidence</p>
          </div>
          <div className="result-box2">
            <div className="content">
              <div className="box2-content">
                <h3>Analysis Result</h3>
                <p>AI-generated insights about the relationship between the two citizens</p>
              </div>
              <div className="box2-content2">
                <button className="save-btn">Save</button>
                <button className="export-btn">Export</button>
              </div>
            </div>
            <div className="grid-container">
              <div className="item wide First">
                <h4>Relationship Type :</h4>
                <p>First Cousin</p>
              </div>
              <div className="item wide percentage">
                <h1>89%</h1>
                <p>Accuracy percentage</p>
              </div>
              <div className="item large findings">
                <h4>Key Findings :</h4>
                <p>• Both share a common grandfather CID</p>
                <p>• Their fathers (Person A and Person B) are brothers</p>
                <p>• Multiple family connections exist through extended family members</p>
              </div>
              <div className="item large disclaimer">
                <h4>AI-Generated Content Disclaimer</h4>
                <p>
                  This analysis is generated by artificial intelligence and may not be 100% accurate. Results should be verified
                  through additional sources before making important decisions. The system provides estimates based on available
                  data and should be used as a starting point for further investigation, not as definitive proof of relationships.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-text">
          <p>
            Copyright © 2025 Anti-Corruption Commission of Bhutan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;