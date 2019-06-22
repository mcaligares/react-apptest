import React from 'react';
import ProductCard from './ProductCard';
import Product from '../../models/Product';
import loading from '../../assets/loading.svg';
import './ProductList.css';

export default class ProductList extends React.Component<any> {
  render() {

    let element;
    if (this.props.products.length === 0) {
      element = <img src={ loading } className="loading" alt="" />;
    } else {
      element = this.props.products.map(
        (product: Product) => <ProductCard product={product} key={product._id} />
      );
    }

    return (
      <div className="product-list">
        { element }
      </div>
    )
  };
}
