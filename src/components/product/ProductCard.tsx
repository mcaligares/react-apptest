import React from 'react';
import { Subscribe } from 'unstated';
import UserStore from '../../store/UserStore';
import ProductPrice from './ProductPrice';
import Product from '../../models/Product';
import ProductAction from './ProductAction';
import image from '../../assets/images/image-loader.png';

type ProductCardProps = {
  product: Product
}

export default class ProductCard extends React.Component<ProductCardProps> {

  render() {
    return (
      <Subscribe to={[UserStore]}>
        { store  =>
          <div className="product">
            <ProductPrice points={ store.state.currentUser.points } price={ this.props.product.cost } />

            <div className="product-image" style={ {backgroundImage: `url(${this.props.product.img}), url(${image})`} } />

            <div className="info">
              <span>{ this.props.product.category }</span>
              <h2>{ this.props.product.name }</h2>
            </div>

            <ProductAction
              product={ this.props.product }
              points={ store.state.currentUser.points }
              redeemProduct={ store.state.redeemProduct }
            />
          </div>
        }
      </Subscribe>
    );
  }

}
