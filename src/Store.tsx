import User from "./models/User";
import { Container } from "unstated";
import Product from "./models/Product";

type AppStateType = {
  currentUser: User,
  products: Array<Product>
}

export default class AppState extends Container<AppStateType> {

  constructor(prop: any = {}) {
    super();
    this.state = {
      currentUser: prop.user,
      products: prop.products
    };
  }

  setUserAndProducts(results: any) {
    this.setState({
      currentUser: results[0],
      products: results[1]
    });
  }

  setUser(user: User) {
    this.state.currentUser = user;
  }

  setUserPoints(points: number) {
    this.state.currentUser.points = points;
    this.setState({ currentUser: this.state.currentUser });
  }

}
