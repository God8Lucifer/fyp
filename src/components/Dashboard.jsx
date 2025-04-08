import React, { useRef, useEffect, useState } from 'react';
import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  FaHome,
  FaProjectDiagram,
  FaChartLine,
  FaUsers,
  FaClipboardList,
  FaInfoCircle
} from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

function Dashboard() {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const [relationshipData, setRelationshipData] = useState(null);
  const [aiData, setAiData] = useState(null);

  useEffect(() => {
    const gradient1 = canvasRef1.current?.getContext('2d')?.createLinearGradient(0, 0, 600, 0);
    if (gradient1) {
      gradient1.addColorStop(0, 'rgba(255,255,255,0.1)');
      gradient1.addColorStop(1, '#636ae8');
    }

    const gradient2 = canvasRef2.current?.getContext('2d')?.createLinearGradient(0, 0, 600, 0);
    if (gradient2) {
      gradient2.addColorStop(0, 'rgba(255,255,255,0.1)');
      gradient2.addColorStop(1, '#636ae8');
    }

    setRelationshipData({
      labels: months,
      datasets: [{
        label: 'Relationships Mapped',
        data: [20, 40, 15, 60, 35, 50, 30, 45, 20, 70, 90, 55],
        backgroundColor: gradient1 || '#636ae8',
      }]
    });

    setAiData({
      labels: months,
      datasets: [{
        label: 'AI Analysis',
        data: [10, 60, 20, 45, 30, 70, 40, 50, 20, 60, 85, 65],
        backgroundColor: gradient2 || '#636ae8',
      }]
    });
  }, []);

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true, ticks: { stepSize: 10 } },
      y: {
        type: 'category',
        labels: months,
        ticks: {
          autoSkip: false
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div>
          <h2>ARM Dashboard</h2>
          <nav>
            <ul>
              <li><FaHome /> Dashboard</li>
              <li><FaProjectDiagram /> Relationship Mapping</li>
              <li><FaChartLine /> Analysis</li>
              <li><FaUsers /> Citizen Record</li>
              <li><FaClipboardList /> Audit Log</li>
            </ul>
          </nav>
        </div>
        <div className="user-box">
          <img src="/profile.jpg" alt="User" />
          <span>Username</span>
        </div>
      </aside>

      <main className="main-content">
        <h1>Dashboard</h1>
        <div className="stats-cards">
          <div className="card"><p>Total User</p><h2>2592</h2></div>
          <div className="card"><p>Relationships Mapped</p><h2>892,345</h2></div>
          <div className="card"><p>AI Analysis</p><h2>10,925</h2></div>
        </div>

        <div className="content-grid">
          <div className="chart-box">
            <h3>Relationship Mapped</h3>
            <p>Total relationship mapped until date</p>
            <canvas ref={canvasRef1} style={{ display: 'none' }} />
            {relationshipData && (
              <Bar data={relationshipData} options={options} />
            )}
          </div>

          <div className="activity-box">
            <h3>Recent Activities</h3>
            <p>Latest system activities</p>
            <ul>
              <li>
                <div className="icon"><FaInfoCircle /></div>
                <div className="text">
                  <span className="activity-text">User: Dorji performed relationship analysis</span>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </li>
              <li>
                <div className="icon"><FaInfoCircle /></div>
                <div className="text">
                  <span className="activity-text">User: Kinzang performed relationship analysis</span>
                  <span className="activity-time">2 hour ago</span>
                </div>
              </li>
              <li>
                <div className="icon"><FaInfoCircle /></div>
                <div className="text">
                  <span className="activity-text">User: Karma performed relationship analysis</span>
                  <span className="activity-time">3 hour ago</span>
                </div>
              </li>
              <li>
                <div className="icon"><FaInfoCircle /></div>
                <div className="text">
                  <span className="activity-text">User: Jamtsho performed relationship analysis</span>
                  <span className="activity-time">4 hour ago</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="chart-box">
            <h3>AI Analysis</h3>
            <p>Total AI analysis done until date</p>
            <canvas ref={canvasRef2} style={{ display: 'none' }} />
            {aiData && (
              <Bar data={aiData} options={options} />
            )}
          </div>

          <div className="quick-access-box">
            <h3>Quick Access</h3>
            <p>Frequently used features</p>
            <div className="quick-buttons">
              <button><FaProjectDiagram /> Relationship Mapping</button>
              <button><FaChartLine /> AI Insights</button>
              <button><FaUsers /> Citizen Records</button>
              <button><FaClipboardList /> Audit Logs</button>
            </div>
          </div>
        </div>

        <footer>Copyright © 2025 Anti-Corruption Commission of Bhutan. All rights reserved.</footer>
      </main>
    </div>
  );
}

export default Dashboard;
