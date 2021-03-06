import User from "../models/User";
import { Container } from "unstated";
import Api from "../services/Api";
import Product from "../models/Product";

export type UserStoreType = {
  loading: boolean,
  currentUser: User
  userPointsChanged: number,
  earnPoints: Function,
  setUserPoints: Function,
  redeemProduct: Function,
  restoreUserPointsChanged: Function,
}

export default class UserStore extends Container<UserStoreType> {

  constructor(props: any = {}) {
    super();
    this.state = {
      userPointsChanged: 0,
      loading: props.loading || false,
      currentUser: props.user || new User({}),
      earnPoints: this.earnPoints,
      setUserPoints: this.setUserPoints,
      redeemProduct: this.redeemProduct,
      restoreUserPointsChanged: this.restoreUserPointsChanged
    };
  }

  async fetchUserData() {
    try {
      const currentUser = await Api.getUser();
      this.setState({ currentUser, loading: false });
    } catch (e) {
      // TODO handle error
      console.error('Error getting user data', e);
      this.setState({ loading: false });
    }
  }

  setUserPoints = (total: number, points: number) => {
    this.state.currentUser.points = total;
    this.setState({ currentUser: this.state.currentUser, userPointsChanged: points });
  }

  restoreUserPointsChanged = () => {
    this.setState({ userPointsChanged: 0 });
  }

  redeemProduct = async (product: Product) => {
    const points = this.state.currentUser.points;
    const wasRedeemed = (pointsUpdated: number) => pointsUpdated >= 0;
    const haveUserEnoughPointsToRedeemProduct = (price: number, points: number) => points - price >= 0;

    if (haveUserEnoughPointsToRedeemProduct(product.cost, points)) {
      const pointsUpdated = await Api.claimProduct(product, points);
      if (wasRedeemed(pointsUpdated)) {
        this.setUserPoints(pointsUpdated, -product.cost);
        return true;
      } else {
        console.error('user could not redeem the product');
      }
    } else {
      console.error('user dont have enough point to redeem the product');
    }
    return false;
  }

  earnPoints = async (points: number) => {
    const availablePoints = [1000, 5000, 7500];
    const wasAcquired = (pointsUpdated: number) => pointsUpdated >= 0;
    const isValidPoints = (points: number, pointsList: number[]) => !!pointsList.find(p => p === points);

    if (isValidPoints(points, availablePoints)) {
      const pointsUpdated = await Api.earnPoints(points, this.state.currentUser.points);
      if (wasAcquired(pointsUpdated)) {
        this.setUserPoints(pointsUpdated, points);
        return true;
      } else {
        console.error('user could not aquired the points');
      }
    } else {
      console.error('available points are ' + availablePoints);
    }
    return false;
  }

}
