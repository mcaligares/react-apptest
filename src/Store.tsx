import User from "./models/User";
import { Container } from "unstated";
import Product, { sortById, sortByLowerPrice, sortByHigherPrice, filterByName } from "./models/Product";

export type AppStateType = {
  loading: boolean,
  sortBy: Function,
  searchFor: Function,
  setUserPoints: Function
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
      filteredProducts: props.filteredProducts,
      sortBy: this.sortBy,
      searchFor: this.searchFor,
      setUserPoints: this.setUserPoints
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
