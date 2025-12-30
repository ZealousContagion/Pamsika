
import React from 'react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>YOUR CART ({cartItems.length})</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="btn btn-outline" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  {/* Placeholder for image */}
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="item-price">${item.price}</p>
                  <div className="item-controls">
                    <div className="quantity-ctrl">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span className="amount">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="shipping-note">Shipping calculated at checkout</p>
            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .cart-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
        }
        .cart-drawer {
          width: 100%;
          max-width: 400px;
          background: rgba(22, 22, 22, 0.95);
          backdrop-filter: blur(20px);
          height: 100%;
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .cart-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .close-btn {
          color: var(--color-text-muted);
        }
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        .empty-cart {
          text-align: center;
          margin-top: 4rem;
          color: var(--color-text-muted);
        }
        .cart-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .item-image {
          width: 80px;
          height: 80px;
          background: #222;
          border-radius: var(--radius-md);
        }
        .item-details {
          flex: 1;
        }
        .item-details h3 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }
        .item-price {
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .item-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .quantity-ctrl {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.05);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        .quantity-ctrl button {
          display: flex;
          align-items: center;
          color: var(--color-text-muted);
        }
        .quantity-ctrl button:hover {
          color: white;
        }
        .remove-btn {
          color: #ff4d4d;
          opacity: 0.7;
        }
        .remove-btn:hover {
          opacity: 1;
        }
        .cart-footer {
          padding: 2rem;
          background: #111;
          border-top: 1px solid var(--color-border);
        }
        .cart-total {
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .shipping-note {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }
        .checkout-btn {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
