import React from 'react';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';
import AppState from '../../Store';
import User from '../../models/User';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

type HeaderTopProps = {
  user: User
};

export default class HeaderTop extends React.Component<HeaderTopProps> {

  render() {
    return (
      <Subscribe to={[AppState]}>
        { app =>
          <header className="top">
            <Link to="/">
              <img src={aerolabLogo} alt="AeroLab" />
            </Link>
            <div className="flex-spacing"></div>
            {
              !this.props.user._id && <img src={loading} className="loading" alt="" />
            }
            {
              this.props.user._id &&
              <Link to="/profile">
                <div className="profile">
                  { this.props.user.name }
                  <HeaderUserPoints points={ this.props.user.points } pointsChanged={ app.state.userPointsChanged } restorePointsChanged={ app.state.restoreUserPointsChanged } />
                </div>
              </Link>
            }
          </header>
        }
      </Subscribe>
    );
  }
}
