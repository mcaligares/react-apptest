import React from 'react';
import ProductCard from './ProductCard';
import Product from '../../models/Product';
import loading from '../../assets/images/loading.svg';

type ProductListProps = {
  products: Array<Product>
};

export default class ProductList extends React.Component<ProductListProps> {

  renderProducts() {
    if (this.props.products.length === 0 ){
      return <img src={ loading } className="loading" alt="" />;
    } else {
      return this.props.products.map(
        (product: Product) => <ProductCard product={product} key={product._id} />
      );
    }
  }

  render() {
    return (
      <div className="product-list">
        { this.renderProducts() }
      </div>
    )
  }

}
