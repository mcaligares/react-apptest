import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

export default class ProductList extends React.Component {
  list = [
    {
      "_id": "5a0b35c1734d1d08bf7084c3",
      "name": "iPhone 8",
      "cost": 800,
      "category": "Phones",
      "img": {
        "url": "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
        "hdUrl": "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
      }
    }
  ];
  render() {
    return (
      <div className="product-list">
        {
           this.list.map(item => <ProductCard product={item} key={item._id} />)
        }
      </div>
    )
  };
}
