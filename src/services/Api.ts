import axios from 'axios';
import User from '../models/User';
import Product from '../models/Product';

class Api {

  baseApi: any;

  constructor() {
    this.baseApi = axios.create({
      baseURL: `https://private-anon-2a54263bc3-aerolabchallenge.apiary-proxy.com/`,
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDBiZGVhZmVhODM3NzAwNmRiMWI1N2UiLCJpYXQiOjE1NjEwNTg5OTF9.kCPNIH2IV_Ec8x-ggY1nDD_9c0IqWgINthgyYmG-G_0'}
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

}

export default new Api();