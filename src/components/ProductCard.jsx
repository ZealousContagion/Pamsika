import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, title, price, category }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.some(item => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, title, price, category });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({ id, title, price, category });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="card-link">
        <div className="card-image">
          <div className="image-placeholder"></div>
          <span className="card-category-badge">{category}</span>
          <button
            className={`wishlist-float-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">${price}</p>
        </div>
      </Link>

      <button className="add-btn-overlay" onClick={handleAddToCart}>
        <Plus size={20} />
      </button>

      <style>{`
        .product-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }
        .card-link {
          display: block;
          height: 100%;
          color: white;
        }
        .card-image {
          position: relative;
          aspect-ratio: 1 / 1;
          background: #111;
          overflow: hidden;
        }
        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
        }
        
        .card-category-badge {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-radius: 50px;
            color: white;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .wishlist-float-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(4px);
            border: none;
            color: white;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.2s;
        }
        .wishlist-float-btn:hover {
            background: rgba(255,255,255,0.2);
            transform: scale(1.1);
        }
        .wishlist-float-btn.active {
            color: #ff4d4d;
            background: rgba(255, 77, 77, 0.1);
        }

        /* Add to cart Overlay button */
        .add-btn-overlay {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
          transform: translateY(10px);
        }
        .product-card:hover .add-btn-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .add-btn-overlay:hover {
          background: var(--color-primary);
          color: white;
        }
        
        .card-info {
          padding: 1.5rem;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .card-price {
          color: var(--color-primary);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
