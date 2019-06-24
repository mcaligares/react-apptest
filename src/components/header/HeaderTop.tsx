import React from 'react';
import { Subscribe, Container } from 'unstated';
import AppState from '../../Store';
import HeaderUserPoints from './HeaderUserPoints';
import loading from '../../assets/images/loading.svg';
import aerolabLogo from '../../assets/images/logo.svg';

export default class HeaderTop extends React.Component {

  renderUserProfileOnlyWhenIsAvailable(app: Container<any>) {
    if (app.state.currentUser._id) {
      return (
        <div className="profile">
          { app.state.currentUser.name }
          <HeaderUserPoints points={ app.state.currentUser.points } />
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
        <Subscribe to={[AppState]}>
          { app => this.renderUserProfileOnlyWhenIsAvailable(app)}
        </Subscribe>
      </header>
    );
  }
}
