
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge-pill">New Arrival</div>
          <h1 className="hero-title">
            FUTURE-<br />FORWARD<br />INNOVATION
          </h1>
          <p className="hero-subtitle">
            Discover the latest in tech and design. Elevate your lifestyle with Pamsika's curated collection.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Shop Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="bento-grid">
            <div className="bento-item item-1">
              <span className="bento-label">Latest Tech</span>
            </div>
            <div className="bento-item item-2">
              <span className="bento-label">Design</span>
            </div>
            <div className="bento-item item-3">
              <span className="bento-label">Audio</span>
            </div>
            <div className="bento-item item-4">
              <span className="bento-label">Vision</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
            padding: 4rem 0 6rem;
            position: relative;
            min-height: 80vh;
            display: flex;
            align-items: center;
        }
        .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        .badge-pill {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background: rgba(0, 102, 255, 0.1);
            color: var(--color-primary);
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            border: 1px solid rgba(0, 102, 255, 0.2);
        }
        .hero-title {
            font-size: 4.5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            font-weight: 800;
            letter-spacing: -2px;
            background: linear-gradient(to right, #fff, #aaa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
            color: var(--color-text-muted);
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            max-width: 480px;
            line-height: 1.6;
        }
        .hero-actions {
            display: flex;
            gap: 1rem;
        }
        .btn-outline {
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
        }
        .btn-outline:hover {
            border-color: white;
            background: rgba(255,255,255,0.05);
        }
        
        /* Bento Grid */
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 200px);
            gap: 1rem;
        }
        .bento-item {
            background: var(--color-surface);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.05);
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .bento-item:hover {
            transform: translateY(-5px);
            border-color: rgba(255,255,255,0.1);
        }
        .bento-item::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, rgba(0,102,255,0.1), transparent);
            opacity: 0.5;
        }
        .item-1 {
            grid-column: span 2;
            background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
        }
        .item-2 {
            background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        }
        .item-3 {
            background: linear-gradient(135deg, #222, #111);
        }
        .item-4 {
             /* Optional extra decoration */
        }
        .bento-label {
            position: relative;
            z-index: 10;
            font-size: 1rem;
            font-weight: 500;
            color: rgba(255,255,255,0.8);
        }

        @media (max-width: 968px) {
            .hero-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
                text-align: center;
            }
            .hero-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .hero-title {
                font-size: 3rem;
            }
            .bento-grid {
                grid-template-rows: repeat(2, 150px);
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
