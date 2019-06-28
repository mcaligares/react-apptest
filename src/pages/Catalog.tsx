import React from 'react';
import { Subscribe } from 'unstated';
import AppState from '../Store';
import Header from '../components/product/header/Header';
import ProductList from '../components/product/ProductList';
import HeaderCategory from '../components/header/HeaderCategory';
import categoryBackground from '../assets/images/header-category.png';

export default class Catalog extends React.Component {


  electronicCategory = {
    title: 'Electronics',
    background: categoryBackground
  };

  sortValues = [
    { value: 'recent', text: 'Most recent' },
    { value: 'lower', text: 'Lower price' },
    { value: 'higher', text: 'Highest price' },
  ];

  render() {
    return (
      <Subscribe to={[AppState]}>
        { app =>
        <section>
          <HeaderCategory category={ this.electronicCategory } />

          <ProductList products={ app.state.filteredProducts } loading={ app.state.loading }>
            <Header
              search={{ searchFor: app.state.searchFor }}
              sort={{ values: this.sortValues, sortBy: app.state.sortBy }}
            />
          </ProductList>
        </section>
        }
      </Subscribe>
    );
  }

}
