import React from 'react'
import './ProductFilter.css';

export default class ProductFilter extends React.Component<any, any> {

  sortValues: any = [
    { value: 'recent', text: 'Most recent' },
    { value: 'lower', text: 'Lower price' },
    { value: 'higher', text: 'Highest price' },
  ];
  constructor(props: any) {
    super(props);
    this.state = {value: 'recent'};
    this.onSelected = this.onSelected.bind(this);
  }

  isActive(value: string) {
    return this.state.value === value ? 'selected' : '';
  }

  onSelected(e: any) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="product-filter">
        <span>Sort by:</span>
        {
          this.sortValues.map((item: any) =>
            <button className={this.isActive(item.value)} value={item.value} onClick={this.onSelected}>{item.text}</button>
          )
        }
      </div>
    );
  }
};