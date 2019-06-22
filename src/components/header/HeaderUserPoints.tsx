import React from 'react';
import coin from '../../assets/images/coin.svg';

export default class HeaderUserPoints extends React.Component<any> {

  render() {
    return (
      <div className="points">
        { this.props.points }
        <img src={coin} alt=""/>
      </div>
    );
  }

}