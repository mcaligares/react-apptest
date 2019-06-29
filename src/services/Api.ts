import axios from 'axios';
import User from '../models/User';
import Product from '../models/Product';

class Api {

  baseApi: any;

  constructor(url: string | undefined, token: string | undefined) {
    this.baseApi = axios.create({
      baseURL: url,
      headers: { 'Authorization': 'Bearer ' + token }
    });
  }

  async getUser(): Promise<User> {
    const response = await this.baseApi.get('user/me');
    return new User(response.data);
  }

  async getAllProducts(): Promise<Array<Product>> {
    const response = await this.baseApi.get('products');
    return response.data.map((product: any) => new Product(product));
  }

  async claimProduct(product: Product, points: number): Promise<number> {
    try {
      await this.baseApi.post('redeem', { productId: product._id });
      return points - product.cost;
    } catch (e) {
      console.error('error on claim product', e);
      return -1;
    }
  }

  async getHistory(): Promise<Array<Product>> {
    const response = await this.baseApi.get('user/history');
    return response.data.map((product: any) => new Product(product));
  }

  async earnPoints(amount: number, points: number): Promise<number> {
    try {
      await this.baseApi.post('user/points', { amount });
      return points + amount;
    } catch (e) {
      console.error('error on earn points', e);
      return -1;
    }
  }

}

export default new Api(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_TOKEN);