import React from 'react'
import Sort, { SortProps } from './Sort';

type HeaderOptionsProps = {
  sort: SortProps
};

export default class Header extends React.Component<HeaderOptionsProps> {

  render() {
    return (
      <div className="product-header">
        <div className="search">
          <input type="text" placeholder="Buscar..." />
        </div>

        { this.props.sort && <Sort values={ this.props.sort.values } sortBy={ this.props.sort.sortBy } /> }
      </div>
    );
  }
};