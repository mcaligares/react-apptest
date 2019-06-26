import React from 'react';
import { Provider, Subscribe } from 'unstated';
import AppState from './Store';
import Api from './services/Api';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import HeaderCategory from './components/header/HeaderCategory';
import Sort from './components/product/header/Sort';
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
      <Provider inject={[this.container]}>
        <Subscribe to={[this.container]}>
          { app =>
            <div className="App">

              <HeaderTop user={ app.state.currentUser } />
              <HeaderCategory category={ this.electronicCategory } />

              <ProductList products={ app.state.products } >
                <Sort values={ this.sortValues } sortBy={ app.state.sortBy } />
              </ProductList>

              <Footer />

            </div>
          }
        </Subscribe>
      </Provider>
    );
  }

}
