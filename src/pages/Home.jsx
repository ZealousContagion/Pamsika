import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
    // Use first 4 products as "Featured"
    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home-page">
            <Hero />

            <section className="section container">
                <div className="section-header">
                    <h2>Featured Curations</h2>
                    <Link to="/shop" className="view-all-link">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                        />
                    ))}
                </div>
            </section>

            <style>{`
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
      `}</style>
        </div>
    );
};

export default Home;
