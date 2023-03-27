import React from 'react';
import Product from './Product';
import './estilos.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
