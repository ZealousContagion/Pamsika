
import React from 'react';

const Innovation = () => {
  return (
    <div className="container page-content">
      <div className="innovation-hero">
        <h1 className="glitch-text">TOMORROW<br />IS HERE</h1>
        <p className="innovation-desc">
          We don't just sell technology. We curate the interface between humanity and the future. Pamsika Labs is constantly scouting for breakthrough hardware that redefines possibility.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">01</div>
          <h3>Quantum Ready</h3>
          <p>Prepared for the next leap in computing power.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">02</div>
          <h3>Sustainability</h3>
          <p>Zero-carbon footprint logistics and eco-packaging.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">03</div>
          <h3>AI Integrated</h3>
          <p>Smart products that learn and adapt to you.</p>
        </div>
      </div>

      <style>{`
        .page-content {
          padding-top: 4rem;
          min-height: 80vh;
        }
        .innovation-hero {
          text-align: center;
          margin-bottom: 6rem;
        }
        .glitch-text {
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 2rem;
          background: linear-gradient(to bottom right, #fff, var(--color-primary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .innovation-desc {
          max-width: 600px;
          margin: 0 auto;
          color: var(--color-text-muted);
          font-size: 1.25rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.2);
        }
        .feature-icon {
          font-size: 3rem;
          font-weight: 900;
          color: var(--color-primary);
          opacity: 0.3;
          margin-bottom: 1rem;
        }
        .feature-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        .feature-card p {
          color: var(--color-text-muted);
        }
        
        @media (max-width: 768px) {
          .glitch-text {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Innovation;
