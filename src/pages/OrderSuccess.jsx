
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
    return (
        <div className="container page-content success-page">
            <div className="success-card">
                <div className="success-icon">
                    <CheckCircle size={64} />
                </div>
                <h1>Order Confirmed!</h1>
                <p>Thank you for shopping with Pamsika. Your order has been received and is being processed.</p>
                <p className="order-number">Order #ORD-{Math.floor(1000 + Math.random() * 9000)}</p>

                <div className="success-actions">
                    <Link to="/shop" className="btn btn-primary">
                        Continue Shopping <ArrowRight size={18} />
                    </Link>
                    <Link to="/profile" className="btn btn-outline">
                        View Order History
                    </Link>
                </div>
            </div>

            <style>{`
        .success-page {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 80vh;
        }
        .success-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            padding: 4rem;
            border-radius: var(--radius-lg);
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 50px -10px rgba(0,0,0,0.5);
            max-width: 500px;
            width: 100%;
            animation: slideUp 0.5s ease-out;
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .success-icon {
            color: #00ff88;
            margin-bottom: 2rem;
            display: inline-flex;
            background: rgba(0, 255, 136, 0.1);
            padding: 1.5rem;
            border-radius: 50%;
        }
        .success-card h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .success-card p {
            color: var(--color-text-muted);
            margin-bottom: 0.5rem;
        }
        .order-number {
            font-family: monospace;
            font-size: 1.2rem;
            color: white !important;
            margin: 1rem 0 2.5rem;
        }
        .success-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .btn-outline {
            background: transparent;
            border: 1px solid var(--color-border);
        }
        .btn-outline:hover {
            border-color: white;
            background: rgba(255,255,255,0.05);
        }
      `}</style>
        </div>
    );
};

export default OrderSuccess;
