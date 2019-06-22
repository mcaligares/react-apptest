import React from 'react';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

export default class HeaderTop extends React.Component<any> {

  render() {
    let pointsElement;
    if (this.props.user) {
      pointsElement = <HeaderUserPoints points={ this.props.user.points } />;
    } else {
      pointsElement = <img src={loading} className="loading" alt="" />;
    }

    return (
      <header className="top">
        <img src={aerolabLogo} alt="AeroLab" />
        <div className="flex-spacing"></div>
        <div className="profile">
          { this.props.user ? this.props.user.name : '' }
          { pointsElement }
        </div>
      </header>
    );
  }
}
