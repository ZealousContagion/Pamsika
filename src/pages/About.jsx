
import React from 'react';

const About = () => {
    return (
        <div className="container page-content">
            <div className="split-layout">
                <div className="text-content">
                    <h1 className="page-title">ABOUT<br />PAMSIKA</h1>
                    <p className="lead">
                        Founded in the digital era, Pamsika Inc. stands at the intersection of minimalist design and maximalist capability.
                    </p>
                    <p className="body-text">
                        Our mission is simple: unclutter the tech world. We select only the most essential, high-performance, and beautifully designed products. No noise. Just signal.
                    </p>

                    <div className="stats">
                        <div className="stat">
                            <span className="number">2024</span>
                            <span className="label">ESTABLISHED</span>
                        </div>
                        <div className="stat">
                            <span className="number">15+</span>
                            <span className="label">COUNTRIES</span>
                        </div>
                        <div className="stat">
                            <span className="number">10k+</span>
                            <span className="label">COMMUNITY</span>
                        </div>
                    </div>
                </div>

                <div className="visual-content">
                    <div className="brand-circle"></div>
                </div>
            </div>

            <style>{`
        .page-content {
          padding-top: 4rem;
          min-height: 80vh;
        }
        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .page-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 2rem;
        }
        .lead {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        .body-text {
          color: var(--color-text-muted);
          margin-bottom: 3rem;
          line-height: 1.8;
        }
        .stats {
          display: flex;
          gap: 3rem;
        }
        .stat {
          display: flex;
          flex-direction: column;
        }
        .stat .number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .stat .label {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          letter-spacing: 1px;
        }
        .brand-circle {
          width: 100%;
          padding-bottom: 100%;
          background: radial-gradient(circle at center, var(--color-primary), transparent 70%);
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(50px);
        }
        
        @media (max-width: 768px) {
          .split-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .stats {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
