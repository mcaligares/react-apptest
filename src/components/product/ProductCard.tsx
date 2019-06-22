import React from 'react';
import coin from '../../assets/coin.svg';
import buyBlue from '../../assets/buy-blue.svg';
import buyWhite from '../../assets/buy-white.svg';
import './ProductCard.css';

export default class ProductCard extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { buyIcon: buyBlue };
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  toggleIcon() {
    this.setState({ buyIcon: this.state.buyIcon === buyBlue ? buyWhite : buyBlue });
  }

  render() {
    return (
      <div className="product" onMouseEnter={this.toggleIcon} onMouseLeave={this.toggleIcon}>

        <div className="redeem">
          <div className="data">
            <p>
              <span>{ this.props.product.cost }</span>
              <img src={coin} alt=""/>
            </p>
            <button className="button">Redeem now</button>
          </div>
        </div>

        <img src={this.state.buyIcon} className="buy" alt="buy" />

        <img src={this.props.product.img} alt={this.props.product.name} />

        <div className="info">
          <span>{ this.props.product.category }</span>
          <h2>{ this.props.product.name }</h2>
        </div>

      </div>
    );
  }
}
