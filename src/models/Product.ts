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

}
