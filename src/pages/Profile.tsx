import React from 'react';
import { Subscribe } from 'unstated';
import { Link } from 'react-router-dom';
import closeIcon from '../assets/images/close.svg';
import AppState from '../Store';
import Api from '../services/Api';
import Product from '../models/Product';
import * as msgUtil from '../utils/Messages';
import loadingIcon from '../assets/images/loading.svg';
import ProductFavorite, { getFavoriteProduct } from '../models/ProductFavorite';

export default class Profile extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { products: [], totalPointsSpent: 0, favoriteProduct: new ProductFavorite() };
  }

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
      <Subscribe to={[AppState]}>
        { app =>
          <section className="profile-page">
            <Link to="/"> <img src={ closeIcon } alt="close"/> </Link>

            { app.state.loading && <img src={ loadingIcon } className="loading" alt="" /> }

            { !app.state.loading && msgUtil.getWelcomeMessage(app) }

            { !app.state.loading && msgUtil.getUserPointsMessage(app) }

            { !app.state.loading && msgUtil.getFavoriteProductMessage(this.state.favoriteProduct) }

            { !app.state.loading && msgUtil.getSpentPointsMessage(app, this.state.totalPointsSpent) }

          </section>
        }
      </Subscribe>
    );
  }

}
