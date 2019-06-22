import React from 'react';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/loading.svg';
import aerolabLogo from '../../assets/logo.svg';
import './HeaderTop.css';

export default class HeaderTop extends React.Component<any> {

  constructor(props: any) {
    super(props);
  }

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
        <div className="spacing"></div>
        <div className="profile">
          { this.props.user ? this.props.user.name : '' }
          { pointsElement }
        </div>
      </header>
    );
  }
}
