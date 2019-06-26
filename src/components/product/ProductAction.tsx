import React from 'react';
import Product from '../../models/Product';
import coin from '../../assets/images/coin.svg';

type ProductActionProps = {
  points: number,
  product: Product,
  redeemProduct: Function
};

export default class ProductAction extends React.Component<ProductActionProps> {

  get pointsNeeded(): number {
    return this.props.product.cost - this.props.points;
  }

  private haveUserEnoughPointsToRedeemProduct() {
    return this.props.points - this.props.product.cost >= 0;
  }

  render() {
    return (
      <div className="action">
        {
          !this.haveUserEnoughPointsToRedeemProduct() &&
          <div className="points-needed"> You need { this.pointsNeeded } <img src={coin} alt="" /> </div>
        }
        {
          this.haveUserEnoughPointsToRedeemProduct() &&
          <button className="button" onClick={ this.props.redeemProduct.bind(this, this.props.product) }> Redeem now </button>
        }
      </div>
    );
  }

}
