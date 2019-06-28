import React from 'react';
import coin from '../../assets/images/coin.svg';
import { CSSTransition } from 'react-transition-group';

type HeaderUserPointsProps = {
  points: number,
  pointsChanged: number,
  restorePointsChanged: Function
};

export default class HeaderUserPoints extends React.Component<HeaderUserPointsProps> {

  get simbol() {
    return this.props.pointsChanged > 0 ? "+" : "";
  }

  get classForPoints() {
    return this.props.pointsChanged > 0 ? "ok" : this.props.pointsChanged < 0 ? "ko" : "";
  }

  private restorePointsToCloseAnimation() {
    setTimeout(() => this.props.restorePointsChanged(), 1000);
  }

  render() {
    return (
      <div className="points">

        { this.props.points } <img src={coin} alt=""/>

        <CSSTransition
          in={ this.props.pointsChanged !== 0 }
          timeout={ 1000 }
          classNames="change"
          onEntered={ this.restorePointsToCloseAnimation.bind(this) }
        >
          <span className={ this.classForPoints + " change" }>
            { this.simbol + this.props.pointsChanged }
          </span>
        </CSSTransition>

      </div>
    );
  }

}