import React from 'react';
import coin from '../../assets/images/coin.svg';
import loadingIcon from '../../assets/images/loading.svg';

type EarnPointsProps = {
  coins: number,
  points: number,
  earnPoints: Function
};

export default class EarnPoints extends React.Component<EarnPointsProps> {

  state = { loading: false };

  private async earnPoints(points: any) {
    this.setState({loading: true});
    try {
      await this.props.earnPoints(points);
    } catch (e) {
      console.error('error trying to earn points', e);
    }
    this.setState({loading: false});
  }

  private renderCoinsForPoints(counter: number) {
    const coins = [];
    for (let i = 0; i < counter; i++) coins.push(i + 1);
    return <div className="coins">{ coins.map( i => <img src={coin} alt="" key={i} />) }</div>;
  }

  render() {
    return (
      <button className={ this.state.loading ? "button-primary loading" : "button-primary" } disabled={ this.state.loading } onClick={ this.earnPoints.bind(this, this.props.points) }>
        { !this.state.loading && <div> Click to earn { this.props.points } { this.renderCoinsForPoints(this.props.coins) } </div> }
        { this.state.loading && <img className="loading" src={ loadingIcon } alt="" /> }
      </button>
    );
  }

}
