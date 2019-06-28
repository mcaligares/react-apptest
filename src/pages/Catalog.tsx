import React from 'react';
import { Subscribe } from 'unstated';
import ProductsStore from '../store/ProductsStore';
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
      <Subscribe to={[ProductsStore]}>
        { store =>
          <section>
            <HeaderCategory category={ this.electronicCategory } />

            <ProductList products={ store.state.filteredProducts } loading={ store.state.loading }>
              <Header
                search={{ searchFor: store.state.searchFor }}
                sort={{ values: this.sortValues, sortBy: store.state.sortBy }}
              />
            </ProductList>
          </section>
        }
      </Subscribe>
    );
  }

}
