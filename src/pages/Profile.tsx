import React from 'react';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';
import UserStore from '../store/UserStore';
import Api from '../services/Api';
import Product from '../models/Product';
import * as msgUtil from '../utils/Messages';
import closeIcon from '../assets/images/close.svg';
import loadingIcon from '../assets/images/loading.svg';
import ProductFavorite, { getFavoriteProduct } from '../models/ProductFavorite';

export default class Profile extends React.Component<any, any> {

  state = { products: [], totalPointsSpent: 0, favoriteProduct: new ProductFavorite() };

  async componentDidMount() {
    const products = await Api.getHistory();
    const favoriteProduct = getFavoriteProduct(products);
    const totalPointsSpent = this.getTotalPointsSpend(products);
    this.setState({ products, favoriteProduct, totalPointsSpent });
  }

  private getTotalPointsSpend(products: Array<Product>) {
    return products.length === 0 ? 0 : products.map((product: Product) => product.cost).reduce((a: number, v: number) => a + v);
  }

  render() {
    return (
      <Subscribe to={[UserStore]}>
        { store =>
          <section className="profile-page">
            <Link to="/"> <img src={ closeIcon } alt="close"/> </Link>

            { store.state.loading && <img src={ loadingIcon } className="loading" alt="" /> }

            { !store.state.loading && msgUtil.getWelcomeMessage(store) }

            { !store.state.loading && msgUtil.getUserPointsMessage(store) }

            { !store.state.loading && msgUtil.getFavoriteProductMessage(this.state.favoriteProduct) }

            { !store.state.loading && msgUtil.getSpentPointsMessage(this.state.totalPointsSpent) }

          </section>
        }
      </Subscribe>
    );
  }

}
