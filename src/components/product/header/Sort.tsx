import React from 'react'

export type SortProps = {
  values: Array<any>,
  sortBy: Function
};

export default class Sort extends React.Component<SortProps> {

  state = {value: 'recent'};

  isSelected(value: string) {
    return this.state.value === value ? 'selected' : '';
  }

  onSelect(e: any) {
    this.setState({ value: e.target.value });
    this.props.sortBy(e.target.value);
  }

  render() {
    return (
      <div className="sort">
        <span>Sort by:</span>
        {
          this.props.values.map((item: any) =>
            <button
              key={item.value}
              className={this.isSelected(item.value) + " button"}
              value={item.value} onClick={this.onSelect.bind(this)}
            >
              {item.text}
            </button>
          )
        }
      </div>
    );
  }
};