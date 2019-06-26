import React from 'react';
import coin from '../../assets/images/coin.svg';

type ProductPriceProps = {
  price: number,
  points: number
};

export default class ProductPrice extends React.Component<ProductPriceProps> {

  render() {
    const allowRedeem = (this.props.price - this.props.points) <= 0;
    return (
      <div className={allowRedeem ? 'price redeem' : 'price'}>
        <span>{ this.props.price }</span> <img src={coin} alt="" />
      </div>
    );
  }

}
