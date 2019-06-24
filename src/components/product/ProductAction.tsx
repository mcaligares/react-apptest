import React from 'react';
import { Container } from 'unstated';
import { AppStateType } from '../../Store';
import Api from '../../services/Api';
import Product from '../../models/Product';
import coin from '../../assets/images/coin.svg';

type ProductActionProps = {
  product: Product,
  store: Container<AppStateType>
};

export default class ProductAction extends React.Component<ProductActionProps> {

  constructor(props: any = {}) {
    super(props);
    this.onRedeem = this.onRedeem.bind(this);
    this.updateCurrentPoints = this.updateCurrentPoints.bind(this);
  }

  async onRedeem() {
    const currentPoints = this.props.store.state.currentUser.points;
    const pointsUpdated = await Api.claimProduct(this.props.product, currentPoints);
    if (this.wasRedeemed(pointsUpdated)) {
      this.updateCurrentPoints(pointsUpdated);
    }
  }

  wasRedeemed(pointsUpdated: number) {
    return pointsUpdated >= 0;
  }

  updateCurrentPoints(pointsUpdated: number) {
    this.props.store.state.setUserPoints(pointsUpdated);
  }

  haveUserEnoughPointsToRedeemProduct() {
    const pointsNeeded = this.props.product.cost - this.props.store.state.currentUser.points;
    return pointsNeeded < 0;
  }

  render() {
    if (this.haveUserEnoughPointsToRedeemProduct()) {
      return (
        <div className="redeem">
          <div className="data">
            <p>
              <span>{ this.props.product.cost }</span> <img src={coin} alt=""/>
            </p>
            <button className="button" onClick={ this.onRedeem }> Redeem now </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}
