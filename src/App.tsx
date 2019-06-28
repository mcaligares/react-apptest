import React from 'react';
import { Provider } from 'unstated';
import { Route } from 'react-router-dom';
import User from './models/User';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import UserStore from './store/UserStore';
import ProductsStore from './store/ProductsStore';

export default class App extends React.Component {

  user: User;
  userStore = new UserStore();
  productsStore = new ProductsStore();

  componentDidMount() {
    this.userStore.fetchUserData();
    this.productsStore.fetchAllProducts();
  }

  render() {
    return (
      <Provider inject={[this.userStore, this.productsStore]}>
        <div className="App">

          <HeaderTop />

          <Route path="/" exact component={ Catalog }/>

          <Route path="/profile" component={ Profile } />

          <Footer />

        </div>
      </Provider>
    );
  }

}
