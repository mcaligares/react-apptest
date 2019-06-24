export default class Product {

  _id: string;
  name: string;
  category: string;
  cost: number;
  img: string;

  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.category = data.category;
    this.cost = data.cost;
    this.img = data.img.url;
  }

};

const sortById = (productA: Product, productB: Product) => productA._id < productB._id ? -1 : 1;

const sortByLowerPrice = (productA: Product, productB: Product) => productA.cost - productB.cost;

const sortByHigherPrice = (productA: Product, productB: Product) => productB.cost - productA.cost;

export {sortById, sortByLowerPrice, sortByHigherPrice}