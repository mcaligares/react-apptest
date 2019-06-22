import React from 'react';

export default class HeaderCategory extends React.Component<any> {

  categoryStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundImage: "url(" + this.props.category.background + ")"
  };

  render() {
    return (
      <header className="category" style={ this.categoryStyle }>
        <h1>{ this.props.category.title }</h1>
      </header>
    );
  }

};
