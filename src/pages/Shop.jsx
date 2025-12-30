import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/products';

const Shop = () => {
  const [filter, setFilter] = useState('All');

  // Get unique categories from products
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = filter === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="container page-content">
      <h1 className="page-title">SHOP ALL</h1>

      <div className="shop-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>

      <style>{`
                .page-content {
                    padding-top: 2rem;
                    min-height: 80vh;
                }
                .page-title {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                }
                .shop-filters {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    overflow-x: auto;
                    padding-bottom: 0.5rem;
                }
                .filter-btn {
                    padding: 0.5rem 1.5rem;
                    border: 1px solid var(--color-border);
                    border-radius: 50px;
                    color: var(--color-text-muted);
                    white-space: nowrap;
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .filter-btn.active {
                    background: rgba(0, 102, 255, 0.15);
                    color: var(--color-primary);
                    border-color: rgba(0, 102, 255, 0.3);
                }
                .filter-btn:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.2);
                    color: white;
                }
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 2rem;
                }
            `}</style>
    </div>
  );
};

export default Shop;
