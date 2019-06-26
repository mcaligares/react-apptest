import React from 'react';
import ProductCard from './ProductCard';
import Product from '../../models/Product';
import loadingIcon from '../../assets/images/loading.svg';

type ProductListProps = {
  loading: boolean,
  products: Array<Product>
};

export default class ProductList extends React.Component<ProductListProps> {

  renderNotFound() {
    return (
      <div className="product-empty">
        <h1>No products found</h1>
        <h3>Try to search by product name or category <span role="img" aria-labelledby="smile">😉</span></h3>
      </div>
    );
  }

  render() {
    return (
      <section className="container">
        { this.props.children }
        <div className="product-list">
          { this.props.loading && <img src={ loadingIcon } className="loading" alt="" /> }
          { !this.props.loading && this.props.products.length === 0 && this.renderNotFound() }
          { this.props.products && this.props.products.map((p: Product) => <ProductCard product={p} key={p._id} />) }
        </div>
      </section>
    );
  }

}
