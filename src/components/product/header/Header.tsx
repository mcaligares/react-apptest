import React from 'react'
import Sort, { SortProps } from './Sort';
import Search, { SearchProps } from './Search';

type HeaderOptionsProps = {
  sort: SortProps,
  search: SearchProps
};

export default class Header extends React.Component<HeaderOptionsProps> {

  render() {
    return (
      <div className="product-header">
        {
          this.props.search &&
          <Search searchFor={ this.props.search.searchFor } />
        }

        {
          this.props.sort &&
          <Sort values={ this.props.sort.values } sortBy={ this.props.sort.sortBy } />
        }
      </div>
    );
  }

};