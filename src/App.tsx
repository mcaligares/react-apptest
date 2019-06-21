import React from 'react';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import HeaderCategory from './components/header/HeaderCategory';
import ProductFilter from './components/product/ProductFilter';
import ProductList from './components/product/ProductList';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HeaderTop />
        <HeaderCategory />

        <div className="container">
          <ProductFilter/>
          <ProductList />
        </div>

        <Footer />
      </div>
    );
  }

}
