import React from 'react';
import { Provider, Subscribe } from 'unstated';
import AppState from './Store';
import User from './models/User';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import Header from './components/product/header/Header';
import HeaderCategory from './components/header/HeaderCategory';
import ProductList from './components/product/ProductList';
import categoryBackground from './assets/images/header-category.png';

const emptyUser = new User({});

export default class App extends React.Component {

  user: User;
  container = new AppState({
    loading: true,
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
    this.container.fetchAllData();
  }

  render() {
    return (
      <Provider inject={[this.container]}>
        <Subscribe to={[this.container]}>
          { app =>
            <div className="App">

              <HeaderTop user={ app.state.currentUser } />
              <HeaderCategory category={ this.electronicCategory } />

              <ProductList products={ app.state.filteredProducts } loading={ app.state.loading }>
                <Header
                  search={{ searchFor: app.state.searchFor }}
                  sort={{ values: this.sortValues, sortBy: app.state.sortBy }}
                />
              </ProductList>

              <Footer />

            </div>
          }
        </Subscribe>
      </Provider>
    );
  }

}
