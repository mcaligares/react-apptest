import React from 'react';
import { Subscribe } from 'unstated';
import AppState from '../../Store';
import ProductAction from './ProductAction';
import ProductPrice from './ProductPrice';
import Product from '../../models/Product';

type ProductCardProps = {
  product: Product
}

export default class ProductCard extends React.Component<ProductCardProps> {

  render() {
    return (
      <Subscribe to={[AppState]}>
        { app =>
          <div className="product">

            <ProductAction product={ this.props.product } store={app} />

            <ProductPrice points={ app.state.currentUser.points } price={ this.props.product.cost } />

            <img src={this.props.product.img} alt={this.props.product.name} />

            <div className="info">
              <span>{ this.props.product.category }</span>
              <h2>{ this.props.product.name }</h2>
            </div>
          </div>
        }
      </Subscribe>
    );
  }

}
