
import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    const { wishlist } = useCart();

    return (
        <div className="container page-content">
            <h1 className="page-title">MY WISHLIST ({wishlist.length})</h1>

            {wishlist.length === 0 ? (
                <div className="empty-state">
                    <p>You haven't saved any items yet.</p>
                </div>
            ) : (
                <div className="product-grid">
                    {wishlist.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                        />
                    ))}
                </div>
            )}

            <style>{`
                .page-content { padding-top: 4rem; min-height: 80vh; }
                .page-title { margin-bottom: 2rem; }
                .empty-state {
                    text-align: center;
                    color: var(--color-text-muted);
                    padding: 4rem;
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

export default Wishlist;
