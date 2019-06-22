import React from 'react';
import Api from './services/Api';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import HeaderCategory from './components/header/HeaderCategory';
import ProductFilter from './components/product/ProductFilter';
import ProductList from './components/product/ProductList';
import categoryBackground from './assets/header-category.png';
import './App.css';

export default class App extends React.Component<any, any> {

  electronicCategory = {
    title: 'Electronics',
    background: categoryBackground
  };

  sortValues = [
    { value: 'recent', text: 'Most recent' },
    { value: 'lower', text: 'Lower price' },
    { value: 'higher', text: 'Highest price' },
  ];

  constructor(props: any) {
    super(props);
    this.state = { user: null, products: [] }
  }

  async componentDidMount() {
    this.setState({ user: await Api.getUser(), products: await Api.getAllProducts() });
  }

  render() {

    return (
      <div className="App">
        <HeaderTop user={ this.state.user } />
        <HeaderCategory category={ this.electronicCategory } />

        <div className="container">
          <ProductFilter sortValues={ this.sortValues } />
          <ProductList products={ this.state.products } />
        </div>

        <Footer />
      </div>
    );
  }

}
