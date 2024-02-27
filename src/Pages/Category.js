import React from 'react';
import CategoryCard from '../Components/CategoryCard';

const Category = () => {
    const productCategories = ['Laptops', 'Hats', 'Zentai'];
    const products = [
        { name: 'Laptop 1', description: 'A powerful laptop for all your needs.', image: '...' },
        { name: 'Laptop 2', description: 'A budget-friendly laptop with great features.', image: '...' },
        // ... more products
    ];

    return (
        <div className="container">
            {/* Header component */}
            <div className="row my-4">
                <div className="col-md-3">
                    <h2>Categories</h2>
                    <ul>
                        {productCategories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-9">
                    <h2>Products</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((product) => (
                            <CategoryCard key={product.name} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
