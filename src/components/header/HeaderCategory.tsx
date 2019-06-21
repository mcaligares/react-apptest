import React from 'react';
import categoryHeader from '../../assets/header-category.png';
import './HeaderCategory.css';

export default class HeaderCategory extends React.Component {

  categoryStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundImage: "url(" + categoryHeader + ")"
  };

  render() {
    return (
      <header className="category" style={this.categoryStyle}>
        <h1>Electronics</h1>
      </header>
    )
  }
};
