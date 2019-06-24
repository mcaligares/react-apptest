import React from 'react';
import { Subscribe, Container } from 'unstated';
import AppState from '../../Store';
import ProductCard from './ProductCard';
import Product from '../../models/Product';
import loading from '../../assets/images/loading.svg';

export default class ProductList extends React.Component {

  renderProducts(app: Container<any>) {
    if (app.state.products.length === 0 ){
      return <img src={ loading } className="loading" alt="" />;
    } else {
      return app.state.products.map(
        (product: Product) => <ProductCard product={product} key={product._id} />
      );
    }
  }

  render() {
    return (
      <div className="product-list">
        <Subscribe to={[AppState]}>
          { app => this.renderProducts(app)}
        </Subscribe>
      </div>
    )
  };
}
