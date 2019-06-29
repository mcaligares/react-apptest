import React from 'react';
import coin from '../../assets/images/coin.svg';

type EarnPointsProps = {
  points: Array<number>
};

export default class EarnPoints extends React.Component<EarnPointsProps> {

  private earnPoints(points: number) {
    console.log(points, this);
  }

  private renderCoinsForPoints(points: number, counter: number) {
    counter++;
    const coins = [];
    for (let i = 0; i < counter; i++) coins.push(i + 1);

    return(
      <div className="coins">
        { coins.map( i => <img src={coin} alt="" key={ i } />) }
      </div>
    );
  }

  render() {
    return (
      <div className="points-earn">
        {
          this.props.points.map((points: number, i: number) => {
            return (
              <button className="button-primary" onClick={ this.earnPoints.bind(this, points) } key={i}>
                Click to earn { points } { this.renderCoinsForPoints(points, i) }
              </button>
            );
          })
        }
      </div>
    );
  }

}
