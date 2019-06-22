import React from 'react';
import coin from '../../assets/images/coin.svg';
import shopIcon from '../../assets/images/shop.svg';

export default class ProductCard extends React.Component<any> {

  render() {
    return (
      <div className="product">

        <div className="redeem">
          <div className="data">
            <p>
              <span>{ this.props.product.cost }</span>
              <img src={coin} alt=""/>
            </p>
            <button className="button">Redeem now</button>
          </div>
        </div>

        <div className="buy">
          <img src={shopIcon} alt="" />
        </div>

        <img src={this.props.product.img} alt={this.props.product.name} />

        <div className="info">
          <span>{ this.props.product.category }</span>
          <h2>{ this.props.product.name }</h2>
        </div>

      </div>
    );
  }
}
