import React from 'react';
import { Subscribe } from 'unstated';
import AppState from '../../Store';
import User from '../../models/User';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

type HeaderTopProps = {
  user: User
};

export default class HeaderTop extends React.Component<HeaderTopProps> {

  renderUserProfileOnlyWhenIsAvailable(app: any) {
    if (this.props.user._id) {
      return (
        <div className="profile">
          { this.props.user.name }
          <HeaderUserPoints points={ this.props.user.points } pointsChanged={ app.state.userPointsChanged } restorePointsChanged={ app.restoreUserPointsChanged } />
        </div>
      );
    } else {
      return <img src={loading} className="loading" alt="" />;
    }
  }

  render() {
    return (
      <Subscribe to={[AppState]}>
        { app =>
          <header className="top">
            <img src={aerolabLogo} alt="AeroLab" />
            <div className="flex-spacing"></div>
            { this.renderUserProfileOnlyWhenIsAvailable(app) }
          </header>
        }
      </Subscribe>
    );
  }
}
