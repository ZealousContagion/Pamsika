import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
        } else {
            const filtered = allProducts.filter(p =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="search-modal">
                <div className="modal-header">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <button className="close-btn" onClick={onClose}><X size={24} /></button>
                </div>

                <div className="search-results">
                    {query && results.length === 0 ? (
                        <div className="no-results">No products found for "{query}"</div>
                    ) : (
                        results.map(product => (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className="search-item"
                                onClick={onClose}
                            >
                                <div className="item-info">
                                    <span className="item-title">{product.title}</span>
                                    <span className="item-cat">{product.category}</span>
                                </div>
                                <ArrowRight size={16} className="arrow-icon" />
                            </Link>
                        ))
                    )}
                    {!query && (
                        <div className="search-suggestions">
                            <h3>Popular Categories</h3>
                            <div className="tags">
                                <button onClick={() => setQuery("Audio")}>Audio</button>
                                <button onClick={() => setQuery("Wearable")}>Wearable</button>
                                <button onClick={() => setQuery("Drones")}>Drones</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent; /* Invisible overlay to catch clicks */
            z-index: 2000;
        }
        .search-modal {
            position: absolute;
            top: 100px; /* Adjust based on navbar height + floating top */
            right: calc(2.5% + 140px); /* Align with search icon: 5% margin + offset */
            width: 350px;
            background: var(--color-surface);
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
            overflow: visible; /* Allow arrow to stick out */
            animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .search-modal::before {
            content: '';
            position: absolute;
            top: -6px;
            right: 20px; /* Align with the search icon inside */
            width: 12px;
            height: 12px;
            background: var(--color-surface);
            border-left: 1px solid rgba(255,255,255,0.1);
            border-top: 1px solid rgba(255,255,255,0.1);
            transform: rotate(45deg);
        }
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-header {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid var(--color-border);
        }
        .modal-header input {
            flex: 1;
            background: transparent;
            border: none;
            color: white;
            font-size: 1.25rem;
            outline: none;
        }
        .close-btn {
            color: var(--color-text-muted);
            padding: 0.5rem;
        }
        .close-btn:hover {
            color: white;
        }
        .search-results {
            max-height: 400px;
            overflow-y: auto;
        }
        .search-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: background 0.2s;
        }
        .search-item:hover {
            background: rgba(255,255,255,0.05);
        }
        .item-title {
            display: block;
            font-weight: 500;
        }
        .item-cat {
            font-size: 0.8rem;
            color: var(--color-text-muted);
            text-transform: uppercase;
        }
        .arrow-icon {
            color: var(--color-text-muted);
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.2s;
        }
        .search-item:hover .arrow-icon {
            opacity: 1;
            transform: translateX(0);
        }
        .no-results {
            padding: 2rem;
            text-align: center;
            color: var(--color-text-muted);
        }
        .search-suggestions {
            padding: 2rem;
        }
        .search-suggestions h3 {
            font-size: 0.9rem;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 1rem;
        }
        .tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        .tags button {
            background: rgba(255,255,255,0.1);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.9rem;
        }
        .tags button:hover {
            background: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default SearchModal;
