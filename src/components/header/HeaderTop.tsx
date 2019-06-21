import React from 'react';
import coin from '../../assets/coin.svg';
import aerolabLogo from '../../assets/logo.svg';
import './HeaderTop.css';

export default class HeaderTop extends React.Component {

  user = {
    username: 'Jonh Kite',
    points: '6000'
  };

  render() {
    return (
      <header className="top">

        <img src={aerolabLogo} alt="AeroLab" />

        <div className="spacing"></div>

        <div className="profile">

          {this.user.username}
          <div className="points">
            {this.user.points}
            <img src={coin} alt="logo" />
          </div>

        </div>

      </header>
    );
  }
}
