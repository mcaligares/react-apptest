import React, { ChangeEvent } from 'react'

export type SearchProps = {
  searchFor: Function
};

export default class Search extends React.Component<SearchProps> {

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.props.searchFor(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search..." onChange={ this.onChange.bind(this) }/>
      </div>
    );
  }
};