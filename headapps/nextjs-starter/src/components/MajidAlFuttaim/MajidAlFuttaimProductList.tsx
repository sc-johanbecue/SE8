'use client';

import { useEffect, useState } from 'react';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Brand: TextField;
}

type ProductListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

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

const ProductListDefaultComponent = (props: ProductListProps): JSX.Element => (
  <div className={`component CruiseOffer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Product List</span>
    </div>
  </div>
);

// export default function ProductList(props: CruiseOfferProps): JSX.Element => {
export const Default = (props: ProductListProps): JSX.Element => {
  {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetch('/api/products?brand_descr=' + props.fields.Brand.value)
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
    }, [props.fields.Brand.value]);

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!products.length) return <div>Loading products...</div>;

    return (
      <div className={`component container mt-4 ${props.params.styles}`}>
        <div>
          <h3>
            <Text field={props.fields.Title} />
          </h3>
        </div>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.item_id || product.item_name}
              className="col-12 col-sm-6 col-lg-4 mb-4"
            >
              <div className="card h-100 shadow-sm">
                <div className="position-relative" style={{ alignSelf: 'center' }}>
                  <img
                    src={product.image_link}
                    alt={product.item_name || 'Product'}
                    style={{ maxHeight: '200px', maxWidth: 'max-content' }}
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
  return <ProductListDefaultComponent {...props} />;
};
