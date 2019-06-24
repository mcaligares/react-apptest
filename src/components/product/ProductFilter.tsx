import React from 'react'

type ProductFilterProps = {
  sortValues: Array<any>,
  setFilter: Function
};

export default class ProductFilter extends React.Component<ProductFilterProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {value: 'recent'};
    this.onSelect = this.onSelect.bind(this);
  }

  isSelected(value: string) {
    return this.state.value === value ? 'selected' : '';
  }

  onSelect(e: any) {
    this.setState({ value: e.target.value });
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <div className="product-filter">
        <span>Sort by:</span>
        {
          this.props.sortValues.map((item: any) =>
            <button className={this.isSelected(item.value) + " button"} value={item.value} onClick={this.onSelect} key={item.value}>{item.text}</button>
          )
        }
      </div>
    );
  }
};