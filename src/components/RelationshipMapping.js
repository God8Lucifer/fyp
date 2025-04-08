import React, { useState } from "react";
import "./RelationshipMapping.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const RelationshipMapping = () => {
  const [showTree, setShowTree] = useState(false);
  const [degree, setDegree] = useState("Select Degree");

  const handleSearch = () => {
    setShowTree(true);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  return (
    <div className="relationship-container">
      {/* Sidebar */}
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <p><a href="#">ARM Dashboard</a></p>
          <hr />
        </div>
        <div className="sidebar-nav">
          <nav>
            <a href="#"><img src="/home.png" className="icon" alt="Home" /><span>Dashboard</span></a>
            <a href="#"><img src="/rm icon.png" className="icon" alt="Relationship Mapping" /><span>Relationship Mapping</span></a>
            <a href="#"><img src="/ai icon.png" className="icon" alt="Analysis" /><span>Analysis</span></a>
            <a href="#"><img src="/record icon.png" className="icon" alt="Citizen Record" /><span>Citizen Record</span></a>
            <a href="#"><img src="/audit icon.png" className="icon" alt="Audit Log" /><span>Audit Log</span></a>
          </nav>
        </div>
        <div className="sidebar-footer">
          <img src="/profile.jpg" className="user-img" alt="User profile" />
          <p>Username</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <h1>Relationship Mapping</h1>
          <p>Quick familia tree generator</p>

          {!showTree ? (
            <div className="search-section">
              <h2>Search Citizen</h2>
              <div className="search-controls">
                <input type="text" placeholder="Enter citizen ID to view family ties" />
                <div className="select-container">
                  <select value={degree} onChange={handleDegreeChange}>
                    <option>Select Degree</option>
                    <option>1st Degree</option>
                    <option>2nd Degree</option>
                    <option>3rd Degree</option>
                  </select>
                  <i className="fa fa-chevron-down"></i>
                </div>
                <button className="expand-btn search-expand" onClick={handleSearch}>
                  <i className="fas fa-search"></i>
                  <span className="btn-text">Search</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="search-action-bar">
              <div className="search-left">
                <input type="text" placeholder="Enter citizen ID to view family ties" />
                <button className="expand-btn search-expand">
                  <i className="fas fa-search"></i>
                  <span className="btn-text">Search</span>
                </button>
              </div>

              <div className="search-right">
                <button><i className="fas fa-share"></i> Share</button>
                <button><i className="fas fa-save"></i> Save</button>
                <button><i className="fas fa-download"></i> Export</button>
                <div className="select-container">
                  <select value={degree} onChange={handleDegreeChange}>
                    <option>Select Degree</option>
                    <option>1st Degree</option>
                    <option>2nd Degree</option>
                    <option>3rd Degree</option>
                  </select>
                  <i className="fa fa-chevron-down"></i>
                </div>
              </div>
            </div>
          )}
        </div>

        {showTree && (
          <div className="result-tree">
            <div className="tree-body">
              {/* Root Node */}
              <div className="node parent">
                <img src="/profile.jpg" alt="Profile" />
                <h4>KARMA DORJI ( age : 40 )</h4>
                <p>123456789091234</p>
                <p>03-07-1998</p>
              </div>

              <div className="vertical-line"></div>
              <div className="horizontal-line-wrapper"><div className="horizontal-line"></div></div>

              {/* 1st Degree */}
              <div className="children">
                <div className="node">
                  <img src="/profile.jpg" alt="Profile" />
                  <h4>KARMA DORJI ( age : 40 )</h4>
                  <p>123456789091234</p>
                  <p>03-07-1998</p>
                </div>
                <div className="node">
                  <img src="/profile.jpg" alt="Profile" />
                  <h4>KARMA DORJI ( age : 40 )</h4>
                  <p>123456789091234</p>
                  <p>03-07-1998</p>
                </div>
              </div>

              {(degree === "2nd Degree" || degree === "3rd Degree") && (
                <>
                  <div className="vertical-line"></div>
                  <div className="horizontal-line-wrapper"><div className="horizontal-line"></div></div>

                  <div className="children">
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                  </div>
                </>
              )}

              {degree === "3rd Degree" && (
                <>
                  <div className="vertical-line"></div>
                  <div className="horizontal-line-wrapper"><div className="horizontal-line short"></div></div>

                  <div className="children">
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                    <div className="node">
                      <img src="/profile.jpg" alt="Profile" />
                      <h4>KARMA DORJI ( age : 40 )</h4>
                      <p>123456789091234</p>
                      <p>03-07-1998</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="footer-text">
          <p>Copyright © 2025 Anti-Corruption Commission of Bhutan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default RelationshipMapping;
