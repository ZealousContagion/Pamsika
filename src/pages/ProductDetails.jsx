import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container page-content">
                <h2>Product not found</h2>
                <button className="btn btn-primary" onClick={() => navigate('/shop')}>Back to Shop</button>
            </div>
        );
    }

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="container page-content">
            <div className="product-layout">
                <div className="product-gallery">
                    <div className="main-image">
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }}
                        />
                    </div>
                </div>

                <div className="product-info">
                    <span className="badge">{product.category}</span>
                    <h1 className="title">{product.title}</h1>

                    <div className="price-rating">
                        <span className="price">${product.price.toFixed(2)}</span>
                        <div className="rating">
                            <Star size={18} fill="currentColor" className="text-warning" />
                            <Star size={18} fill="currentColor" className="text-warning" />
                            <Star size={18} fill="currentColor" className="text-warning" />
                            <Star size={18} fill="currentColor" className="text-warning" />
                            <Star size={18} fill="currentColor" className="text-warning" />
                            <span>(4.9)</span>
                        </div>
                    </div>

                    <p className="description">
                        Premium quality {product.title.toLowerCase()} designed for modern lifestyle.
                        Features high-grade materials and exceptional craftsmanship.
                    </p>

                    <div className="specs">
                        <div className="spec-item"><Truck size={20} /> Free Shipping</div>
                        <div className="spec-item"><Shield size={20} /> 2 Year Warranty</div>
                    </div>

                    <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>
                        Add to Cart <Plus size={20} />
                    </button>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div className="related-products">
                    <h2 className="section-title">You Might Also Like</h2>
                    <div className="product-grid">
                        {relatedProducts.map(rp => (
                            <ProductCard
                                key={rp.id}
                                id={rp.id}
                                title={rp.title}
                                price={rp.price}
                                category={rp.category}
                            />
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                .page-content {
                    padding-top: 4rem;
                    min-height: 80vh;
                }
                .product-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: start;
                    margin-bottom: 4rem;
                }
                .product-gallery {
                    position: sticky;
                    top: 6rem;
                }
                .main-image {
                    width: 100%;
                    aspect-ratio: 1/1;
                    background: linear-gradient(45deg, #111, #222);
                    border-radius: var(--radius-lg);
                    margin-bottom: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                }
                .badge {
                    background: rgba(0, 102, 255, 0.1);
                    color: var(--color-primary);
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .title {
                    font-size: 3rem;
                    margin: 0 0 1rem 0;
                    line-height: 1.1;
                }
                .price-rating {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                .price {
                    font-size: 2rem;
                    font-weight: 700;
                    color: white;
                }
                .rating {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    color: var(--color-text-muted);
                }
                .text-warning {
                    color: #ffc107;
                }
                .description {
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 3rem;
                }
                .specs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    padding: 1.5rem;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: var(--radius-md);
                }
                .badge {
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-block;
                    margin-bottom: 1rem;
                }
                .spec-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: white;
                    font-weight: 500;
                }
                .btn-lg {
                    width: 100%;
                    padding: 1.25rem;
                    font-size: 1.1rem;
                }
                .section-title {
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 2rem;
                }
                @media(max-width: 768px) {
                    .product-layout {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .product-gallery {
                        position: static;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;
