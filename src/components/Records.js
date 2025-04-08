import React, { useState } from "react";
import "./Record.css";

const Records = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const headers = [
    "CID Number", "First Name", "Last Name", "Date of Birth",
    "Father CID", "Mother CID", "Dzongkhag", "Gewog", "Village", "Person Status"
  ];

  return (
    <div className="records">
      {/* Sidebar */}
      <div className={`sidebar-menu ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="material-icons">{isCollapsed ? 'menu' : 'close'}</i>
        </button>
        <div className="sidebar-header">
          {!isCollapsed ? (
            <>
              <p><a href="#">ARM Dashboard</a></p>
              <hr />
            </>
          ) : (
            <i className="material-icons">menu</i>
          )}
        </div>
        <div className="sidebar-nav">
          <nav>
            <a href="#"><i className="material-icons">home</i><span>Dashboard</span></a>
            <a href="#"><i className="material-icons">account_tree</i><span>Relationship Mapping</span></a>
            <a href="#"><i className="material-icons">insights</i><span>Analysis</span></a>
            <a href="#"><i className="material-icons">people</i><span>Citizen Record</span></a>
            <a href="#"><i className="material-icons">list_alt</i><span>Audit Log</span></a>
          </nav>
        </div>
        {!isCollapsed && (
          <div className="sidebar-footer">
            <img src="./profile.jpg" className="user-img" alt="User profile" />
            <p>Username</p>
          </div>
        )}
      </div>

      <div className={`main ${isCollapsed ? 'collapsed' : ''}`}>
        <h1>Citizen Records</h1>

        <div className="filter-card">
          <h2>Filter Record</h2>
          <span>Slect dzongkhag and gewog to view the citizen record</span>
          <div className="filter-input">
            <div className="filter-field">
              <label style={{color: '#3F3F3F', textAlign: 'left'}}>Dzongkhag</label>
              <select><option>Select</option></select>
            </div>
            <div className="filter-field">
              <label style={{color: '#3F3F3F', textAlign: 'left'}}>Gewog</label>
              <select><option>Select</option></select>
            </div>
            <div className="filter-field">
              <label style={{color: '#3F3F3F', textAlign: 'left'}}>Household</label>
              <input placeholder="Enter number" />
            </div>
            <div className="filter-field">
              <label style={{color: '#3F3F3F', textAlign: 'left'}}>Thram No.</label>
              <input placeholder="Enter number" />
            </div>
            <div className="filter-field">
              <label style={{color: '#3F3F3F', textAlign: 'left'}}>Person Status</label>
              <select><option>Select</option></select>
            </div>
            <button><i className="material-icons">search</i></button>
          </div>
        </div>

        <div className="records-card">
          <h2>Citizen Record</h2>
          <div className="records-header">
            <span>Showing 50 records per page</span>
            <div>
              <input placeholder="Search records..." />
              <button><i className="material-icons">search</i></button>
            </div>
          </div>

          <table>
            <thead>
              <tr>{headers.map((h) => (<th key={h}>{h}</th>))}</tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i}>
                  <td>{12334567890}</td> 
                  <td>Karma</td> 
                  <td>Dorji</td> 
                  <td>{new Date().toLocaleDateString()}</td> 
                  <td>{123890984756}</td> 
                  <td>{373645647388}</td>
                  <td>Thimphu</td> 
                  <td>Thimphu</td> 
                  <td>Thimphu</td> 
                  <td className="status">A</td> 
                </tr>
              ))}
            </tbody>
          </table>


          <div className="pagination">
            <span>Previous</span>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>Next</span>
          </div>
        </div>

        <footer>
          © 2025 Anti-Corruption Commission of Bhutan. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Records;
