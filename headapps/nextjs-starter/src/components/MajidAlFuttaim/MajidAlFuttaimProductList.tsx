'use client';

import { useEffect, useState } from 'react';

interface Product {
  item_id: string;
  item_name: string;
  brand_descr: string;
  description?: string;
  category_descr: string;
  group_descr: string;
  subgroup_descr: string;
  price?: number;
  title: string;
  image_link: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.items)) {
          setProducts(data.items);
        } else {
          setError('Invalid data format');
        }
      })
      .catch(() => {
        setError('Failed to fetch products');
      });
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!products.length) return <div>Loading products...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.item_id || product.item_name} className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="position-relative" style={{ height: '200px' }}>
                <img
                  src={product.image_link}
                  alt={product.item_name || 'Product'}
                  style={{ maxHeight: '200px' }}
                  className="card-img-top object-fit-cover"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <small className="text-muted mb-1">ID: {product.item_id || 'N/A'}</small>
                <h5 className="card-title">{product.title || 'Unnamed Product'}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Category: {product.category_descr || 'No category_descr'}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Group:{product.group_descr || 'No group_descr'}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Subgroup:{product.subgroup_descr || 'No subgroup_descr'}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Brand: {product.brand_descr || 'No brand_descr'}
                </h6>
                <p className="card-text flex-grow-1">
                  Description: {product.description || 'No description available'}
                </p>

                <p className="text-success fw-bold">
                  {typeof product.price === 'number'
                    ? `€${product.price.toFixed(2)}`
                    : 'Price: N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
