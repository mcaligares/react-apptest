import React from 'react';
import User from '../../models/User';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

type HeaderTopProps = {
  user: User
};

export default class HeaderTop extends React.Component<HeaderTopProps> {

  renderUserProfileOnlyWhenIsAvailable() {
    if (this.props.user._id) {
      return (
        <div className="profile">
          { this.props.user.name }
          <HeaderUserPoints points={ this.props.user.points } />
        </div>
      );
    } else {
      return <img src={loading} className="loading" alt="" />;
    }
  }

  render() {
    return (
      <header className="top">
        <img src={aerolabLogo} alt="AeroLab" />
        <div className="flex-spacing"></div>
        { this.renderUserProfileOnlyWhenIsAvailable() }
      </header>
    );
  }
}
