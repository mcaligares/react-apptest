import User from "./models/User";
import { Container } from "unstated";
import Product, { sortById, sortByLowerPrice, sortByHigherPrice, filterByName } from "./models/Product";
import Api from "./services/Api";

export type AppStateType = {
  loading: boolean,
  sortBy: Function,
  searchFor: Function,
  setUserPoints: Function,
  redeemProduct: Function,
  currentUser: User,
  products: Array<Product>,
  filteredProducts: Array<Product>,
}

export default class AppState extends Container<AppStateType> {

  constructor(props: any = {}) {
    super();
    this.state = {
      loading: props.loading,
      currentUser: props.user,
      products: props.products,
      filteredProducts: props.products,
      sortBy: this.sortBy,
      searchFor: this.searchFor,
      setUserPoints: this.setUserPoints,
      redeemProduct: this.redeemProduct
    };
  }

  setUserAndProducts(results: any) {
    this.setState({
      loading: false,
      currentUser: results[0],
      products: results[1],
      filteredProducts: results[1]
    });
  }

  setUserPoints = (points: number) => {
    this.state.currentUser.points = points;
    this.setState({ currentUser: this.state.currentUser });
  }

  redeemProduct = async (product: Product) => {
    const points = this.state.currentUser.points;
    const wasRedeemed = (pointsUpdated: number) => pointsUpdated >= 0;
    const haveUserEnoughPointsToRedeemProduct = (price: number, points: number) => points - price >= 0;

    if (haveUserEnoughPointsToRedeemProduct(product.cost, points)) {
      const pointsUpdated = await Api.claimProduct(product, points);
      if (wasRedeemed(pointsUpdated)) {
        this.setUserPoints(pointsUpdated);
      } else {
        console.error('user could not redeem the product');
      }
    } else {
      console.error('user dont have enough point to redeem the product');
    }
  }

  searchFor = (search: string) => {
    if (search.length >= 3) {
      this.setState({
        filteredProducts: this.state.products.filter((product: Product) => filterByName(product, search))
      });
    } else {
      this.setState({ filteredProducts: this.state.products });
    }
  }

  sortBy = (filter: string) => {
    switch (filter) {
      case 'lower':
        this.setState({ filteredProducts: this.state.filteredProducts.sort(sortByLowerPrice)});
        break;
      case 'higher':
        this.setState({ filteredProducts: this.state.filteredProducts.sort(sortByHigherPrice)});
        break;
      default:
        this.setState({ filteredProducts: this.state.filteredProducts.sort(sortById)});
        break;
    }
  }

}
