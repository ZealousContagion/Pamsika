import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';
import AuthModal from './AuthModal';

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Pamsika Inc." className="logo-img" />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links desktop-only">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/innovation" className="nav-link">Innovation</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/wishlist" className="nav-link">Wishlist</Link>
          </div>

          <div className="nav-icons">
            <button className="icon-btn" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
            <button className="icon-btn" onClick={handleUserClick}>
              <User size={20} className={isAuthenticated ? "text-primary" : ""} />
            </button>
            <button className="icon-btn cart-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="icon-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/innovation" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Innovation</Link>
            <Link to="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        )}

        <style>{`
          .navbar {
            background: rgba(22, 22, 22, 0.9);
            backdrop-filter: blur(16px);
            position: sticky;
            top: 20px;
            z-index: 1000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 100px;
            width: 95%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0.75rem 0;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          }
          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            width: 100%;
          }
          .logo {
            display: flex;
            align-items: center;
            z-index: 1001;
            height: 40px; /* Adjust based on preference */
          }
          .logo-img {
            height: 100%;
            width: auto;
            object-fit: contain;
          }
          .nav-links {
            display: flex;
            gap: 2rem;
          }
          .nav-link {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--color-text-muted);
            transition: color 0.2s;
          }
          .nav-link:hover {
            color: white;
          }
          .nav-icons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .icon-btn {
            color: white;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background 0.2s;
          }
          .icon-btn:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          .cart-btn {
            position: relative;
          }
          .cart-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--color-primary);
            color: white;
            font-size: 0.7rem;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--color-bg);
          }
          .mobile-only { display: none; }
          
          .mobile-menu {
            background: var(--color-surface);
            padding: 1rem;
            border-bottom: 1px solid var(--color-border);
            position: absolute;
            width: 100%;
            left: 0;
            top: 100%;
            z-index: 999;
          }
          .mobile-link {
            display: block;
            padding: 1rem;
            color: white;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          
          @media (max-width: 768px) {
            .desktop-only { display: none; }
            .mobile-only { display: block; }
          }
        `}</style>
      </nav>

      {/* Modals placed here to be adjacent to Navbar logic */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
