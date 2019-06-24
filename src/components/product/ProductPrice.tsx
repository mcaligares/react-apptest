import React from 'react';
import coin from '../../assets/images/coin.svg';
import shopIcon from '../../assets/images/shop.svg';

type ProductPriceProps = {
  price: number,
  points: number
};

export default class ProductPrice extends React.Component<ProductPriceProps> {

  render() {
    const pointsNeeded = this.props.price - this.props.points;

    if (pointsNeeded < 0) {
      return (
        <div className="price-info">
          <img src={shopIcon} alt="" />
        </div>
      );
    } else {
      return(
        <div className="price-info need">
          You need { pointsNeeded } <img src={coin} alt="" />
        </div>
      );
    }
  }

}
