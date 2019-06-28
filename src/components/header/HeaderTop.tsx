import React from 'react';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';
import UserStore from '../../store/UserStore';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

export default class HeaderTop extends React.Component {

  render() {
    return (
      <Subscribe to={[UserStore]}>
        { app =>
          <header className="top">
            <Link to="/"> <img src={aerolabLogo} alt="AeroLab" /> </Link>

            <div className="flex-spacing"></div>

            <div className="profile">
              <Link to="/profile"> { app.state.currentUser.name } </Link>
              { app.state.loading && <img src={loading} className="loading" alt="" /> }
              {
                !app.state.loading &&
                <HeaderUserPoints
                  points={ app.state.currentUser.points }
                  pointsChanged={ app.state.userPointsChanged }
                  restorePointsChanged={ app.state.restoreUserPointsChanged }
                />
              }
            </div>
          </header>
        }
      </Subscribe>
    );
  }
}
