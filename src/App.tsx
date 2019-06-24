import React from 'react';
import { Provider } from 'unstated';
import AppState from './Store';
import Api from './services/Api';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import HeaderCategory from './components/header/HeaderCategory';
import ProductFilter from './components/product/ProductFilter';
import ProductList from './components/product/ProductList';
import categoryBackground from './assets/images/header-category.png';
import User from './models/User';

const emptyUser = new User({});

export default class App extends React.Component {

  user: User;
  container = new AppState({
    products: [],
    user: emptyUser
  });

  electronicCategory = {
    title: 'Electronics',
    background: categoryBackground
  };

  sortValues = [
    { value: 'recent', text: 'Most recent' },
    { value: 'lower', text: 'Lower price' },
    { value: 'higher', text: 'Highest price' },
  ];

  componentDidMount() {
    Promise.all([Api.getUser(), Api.getAllProducts()]).then(results =>
      this.container.setUserAndProducts(results));
  }

  render() {
    return (
      <div className="App">
        <Provider inject={[this.container]}>
          <HeaderTop />
          <HeaderCategory category={ this.electronicCategory } />

          <section className="container">
            <ProductFilter sortValues={ this.sortValues } />
            <ProductList />
          </section>

          <Footer />
        </Provider>
      </div>
    );
  }

}
