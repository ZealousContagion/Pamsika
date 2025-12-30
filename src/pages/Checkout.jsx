import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  const handlePay = () => {
    // In a real app, payment processing would happen here
    navigate('/order-success');
  };

  return (
    <div className="container page-content">
      <h1 className="checkout-title">CHECKOUT</h1>
      <div className="checkout-layout">
        <div className="checkout-form">
          <section className="form-section">
            <h2>Contact Information</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </section>

          <section className="form-section">
            <h2>Shipping Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="123 Street Name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" />
              </div>
            </div>
          </section>

          <section className="form-section">
            <h2>Payment</h2>
            <div className="payment-placeholder">
              Payment Integration Placeholder (Stripe/PayPal)
            </div>
          </section>

          <button className="btn btn-primary btn-block" onClick={handlePay}>
            Pay ${cartTotal.toFixed(2)}
          </button>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <div className="summary-info">
                  <span className="summary-name">{item.title}</span>
                  <span className="summary-qty">x{item.quantity}</span>
                </div>
                <span className="summary-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <style>{`
                .page-content {
                    padding-top: 4rem;
                    min-height: 80vh;
                }
                .checkout-title {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .checkout-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 4rem;
                }
                .form-section {
                    margin-bottom: 3rem;
                }
                .form-section h2 {
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid var(--color-border);
                    padding-bottom: 0.5rem;
                }
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    color: white;
                }
                .form-group input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                .payment-placeholder {
                    background: rgba(0, 102, 255, 0.1);
                    padding: 2rem;
                    text-align: center;
                    border-radius: var(--radius-md);
                    color: var(--color-primary);
                    border: 1px dashed var(--color-primary);
                }
                .btn-block {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1rem;
                }
                .checkout-form, .order-summary {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 2.5rem;
                    border-radius: 24px;
                }
                .order-summary {
                    height: fit-content;
                }
                .summary-items {
                    margin-bottom: 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    padding-bottom: 1rem;
                }
                .summary-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                }
                .summary-name {
                    display: block;
                    font-weight: 500;
                }
                .summary-qty {
                    color: var(--color-text-muted);
                    font-size: 0.85rem;
                }
                .summary-total {
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                @media(max-width: 768px) {
                    .checkout-layout {
                        grid-template-columns: 1fr;
                    }
                    .order-summary {
                        order: -1;
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
    </div>
  );
};

export default Checkout;
