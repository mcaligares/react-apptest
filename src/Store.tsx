import User from "./models/User";
import { Container } from "unstated";
import Product, { sortById, sortByLowerPrice, sortByHigherPrice } from "./models/Product";

export type AppStateType = {
  currentUser: User,
  products: Array<Product>,
  sortBy: Function,
  setUserPoints: Function
}

export default class AppState extends Container<AppStateType> {

  constructor(prop: any = {}) {
    super();
    this.state = {
      currentUser: prop.user,
      products: prop.products,
      sortBy: this.sortBy,
      setUserPoints: this.setUserPoints
    };
  }

  setUserAndProducts(results: any) {
    this.setState({
      currentUser: results[0],
      products: results[1]
    });
  }

  setUserPoints = (points: number) => {
    this.state.currentUser.points = points;
    this.setState({ currentUser: this.state.currentUser });
  }

  sortBy = (filter: string) => {
    switch (filter) {
      case 'lower':
        this.setState({ products: this.state.products.sort(sortByLowerPrice)});
        break;
      case 'higher':
        this.setState({ products: this.state.products.sort(sortByHigherPrice)});
        break;
      default:
        this.setState({ products: this.state.products.sort(sortById)});
        break;
    }
  }

}
