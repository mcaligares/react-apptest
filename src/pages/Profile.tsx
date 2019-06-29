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
import EarnPoints from '../components/points/EarnPoints';

export default class Profile extends React.Component<any, any> {

  pointsToEarn = [1000, 5000, 7500];
  state = { loading: true, products: [], totalPointsSpent: 0, favoriteProduct: new ProductFavorite() };

  async componentDidMount() {
    const products = await Api.getHistory();
    const favoriteProduct = getFavoriteProduct(products);
    const totalPointsSpent = this.getTotalPointsSpend(products);
    this.setState({ loading: false, products, favoriteProduct, totalPointsSpent });
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

            { this.state.loading && <img src={ loadingIcon } className="loading" alt="" /> }

            { !this.state.loading && msgUtil.getWelcomeMessage(store) }

            { !this.state.loading && msgUtil.getUserPointsMessage(store) }

            { !this.state.loading && msgUtil.getFavoriteProductMessage(this.state.favoriteProduct) }

            { !this.state.loading && msgUtil.getSpentPointsMessage(this.state.totalPointsSpent) }

            { !this.state.loading && <p> <b>How to earn points? <span role="img" aria-labelledby="down">👇</span></b> </p> }

            { !this.state.loading &&
              <div className="points-earn">
                { this.pointsToEarn.map((points, i) => <EarnPoints points={ points } coins={(i+1)} earnPoints={ store.state.earnPoints } key={ i } />) }
              </div>
            }

          </section>
        }
      </Subscribe>
    );
  }

}
