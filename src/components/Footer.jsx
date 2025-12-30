
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>PAMSIKA</h3>
            <p>Future-Forward Innovation.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Pamsika Inc. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
            background: linear-gradient(to bottom, var(--color-surface), #050505);
            padding: 4rem 0 2rem;
            margin-top: 4rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-brand h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-brand p {
          color: var(--color-text-muted);
        }
        .footer-links h4 {
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: var(--color-text-muted);
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--color-primary);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-links {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
