import React from 'react';
import ProductCard from './ProductCard';
import Product from '../../models/Product';
import loadingIcon from '../../assets/images/loading.svg';

type ProductListProps = {
  loading: boolean,
  products: Array<Product>
};

export default class ProductList extends React.Component<ProductListProps> {

  renderProducts() {
    if (this.props.products && this.props.products.length > 0 ) {
      return this.props.products.map(
        (product: Product) => <ProductCard product={product} key={product._id} />
      );
    } else if (this.props.products) {
      return (
        <div className="product-empty">
          <h1>No products found</h1>
          <h3>Try to search by product name or category <span role="img" aria-labelledby="smile">😉</span></h3>
        </div>
      )
    }
    return <div/>
  }

  render() {
    return (
      <section className="container">
        { this.props.children }
        <div className="product-list">
          { !this.props.loading || <img src={ loadingIcon } className="loading" alt="" /> }
          { this.renderProducts() }
        </div>
      </section>
    )
  }

}
