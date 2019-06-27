import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Product from '../../models/Product';
import coin from '../../assets/images/coin.svg';
import loadingIcon from '../../assets/images/loading.svg';

type ProductActionProps = {
  points: number,
  product: Product,
  redeemProduct: Function
};

export default class ProductAction extends React.Component<ProductActionProps, any> {

  constructor(props: ProductActionProps) {
    super(props);
    this.state = { loading: false, redeemed: false };
    this.redeemProduct = this.redeemProduct.bind(this);
  }

  get pointsNeeded(): number {
    return this.props.product.cost - this.props.points;
  }

  private haveUserEnoughPointsToRedeemProduct() {
    return this.props.points - this.props.product.cost >= 0;
  }

  private async redeemProduct() {
    this.setState({ loading: true });
    try {
      const result = await this.props.redeemProduct(this.props.product);
      if (result) {
        this.setState({ redeemed: true });
        setTimeout(() => this.setState({ redeemed: false }), 2000);
      }
    } catch(e) {
      console.error('error trying to redeem a product', e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="action">
        <CSSTransition in={this.state.redeemed} timeout={2000} classNames="success">
          <div className="product-redeemed">
            <div className="price-redeemed">
              <p>Done! <span role="img" aria-labelledby="ok">👍</span></p>
              <p>- { this.props.product.cost } <img src={coin} alt="" /></p>
            </div>
          </div>
        </CSSTransition>
        {
          !this.haveUserEnoughPointsToRedeemProduct() &&
          <div className="points-needed"> You need { this.pointsNeeded } <img src={coin} alt="" /> </div>
        }
        {
          this.haveUserEnoughPointsToRedeemProduct() &&
          <button className={ this.state.loading ? "button loading" : "button" } disabled={this.state.loading} onClick={ this.redeemProduct }>
            { !this.state.loading && 'Redeem now' }
            { this.state.loading && <img src={ loadingIcon } alt="" /> }
          </button>
        }
      </div>
    );
  }

}
