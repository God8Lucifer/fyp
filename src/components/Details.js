import React from "react";
import "./Details.css";

const Details = () => {

    const headers = [
        "CID Number", "First Name", "Last Name", "Date of Birth",
        "Father CID", "Mother CID", "Dzongkhag", "Gewog", "Village", "Person Status"
      ];
      
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

export default Details;