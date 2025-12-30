
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Package, User, LogOut, Settings } from 'lucide-react';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  // Redirect if accessed directly by guest (safeguard)
  if (!isAuthenticated) {
    return (
      <div className="container page-content">
        <div className="guest-warning">
          <h2>Restricted Access</h2>
          <p>Please log in to view your dashboard.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Return Home</button>
        </div>
        <style>{`
          .page-content { padding-top: 6rem; min-height: 80vh; }
          .guest-warning { text-align: center; margin-top: 4rem; }
          .guest-warning p { color: var(--color-text-muted); margin-bottom: 2rem; }
        `}</style>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container page-content">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h1>Welcome, {user.name}</h1>
          <p>{user.email}</p>
        </div>
        <button className="btn btn-outline logout-btn" onClick={handleLogout}>
          <LogOut size={18} /> Sign Out
        </button>
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-nav">
          <button
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <Package size={20} /> Orders
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> Account Settings
          </button>
        </aside>

        <main className="dashboard-content">
          {activeTab === 'orders' && (
            <div className="orders-section">
              <h2>Order History</h2>
              <div className="order-list">
                {/* Mock Orders */}
                <div className="order-card">
                  <div className="order-header">
                    <span>Order #ORD-2929</span>
                    <span className="status delivered">Delivered</span>
                  </div>
                  <div className="order-meta">
                    <span>Oct 24, 2024</span>
                    <span>$299.00</span>
                  </div>
                  <div className="order-preview">
                    1x Neo-Gen Headphones
                  </div>
                </div>

                <div className="order-card">
                  <div className="order-header">
                    <span>Order #ORD-1150</span>
                    <span className="status processing">Processing</span>
                  </div>
                  <div className="order-meta">
                    <span>Dec 30, 2024</span>
                    <span>$1,299.00</span>
                  </div>
                  <div className="order-preview">
                    1x Cyber Deck
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Display Name</label>
                  <input type="text" defaultValue={user.name} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" defaultValue={user.email} disabled />
                  <small className="help-text">Email cannot be changed.</small>
                </div>
                <button className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .page-content {
          padding-top: 4rem;
          min-height: 80vh;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
        }
        .profile-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--color-primary), #003366);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }
        .profile-info h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        .profile-info p {
          color: var(--color-text-muted);
        }
        .logout-btn {
          margin-left: auto;
          display: flex;
          gap: 0.5rem;
        }
        
        .dashboard-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 4rem;
        }
        .dashboard-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          text-align: left;
          border-radius: var(--radius-md);
          color: var(--color-text-muted);
          transition: all 0.2s;
        }
        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }
        .nav-item.active {
          background: rgba(0, 102, 255, 0.1);
          color: var(--color-primary);
          font-weight: 600;
          border: 1px solid rgba(0, 102, 255, 0.2);
        }
        
        .order-card, .settings-section {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .status {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          text-transform: uppercase;
        }
        .status.delivered { background: rgba(0, 255, 136, 0.1); color: #00ff88; }
        .status.processing { background: rgba(0, 102, 255, 0.1); color: #0066ff; }
        
        .order-meta {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: flex;
          gap: 1rem;
        }
        .order-preview {
          font-size: 0.95rem;
        }
        
        .settings-form {
          max-width: 400px;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--color-text-muted);
        }
        .form-group input {
          width: 100%;
          padding: 0.8rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: white;
        }
        .help-text {
          display: block;
          margin-top: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.8rem;
        }
        
        @media (max-width: 768px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
          }
          .profile-header {
            flex-direction: column;
            text-align: center;
          }
          .logout-btn {
            margin: 1rem auto 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
