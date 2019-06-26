import React from 'react';
import { Subscribe } from 'unstated';
import AppState from '../../Store';
import ProductPrice from './ProductPrice';
import Product from '../../models/Product';
import ProductAction from './ProductAction';

type ProductCardProps = {
  product: Product
}

export default class ProductCard extends React.Component<ProductCardProps> {

  render() {
    return (
      <Subscribe to={[AppState]}>
        { app =>
          <div className="product">
            <ProductPrice points={ app.state.currentUser.points } price={ this.props.product.cost } />

            <img src={this.props.product.img} alt={this.props.product.name} />

            <div className="info">
              <span>{ this.props.product.category }</span>
              <h2>{ this.props.product.name }</h2>
            </div>

            <ProductAction product={ this.props.product } points={ app.state.currentUser.points } redeemProduct={ app.state.redeemProduct } />
          </div>
        }
      </Subscribe>
    );
  }

}
