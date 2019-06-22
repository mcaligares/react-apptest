export default class User {

  _id: string;
  name: string;
  points: number;

  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.points = data.points;
  }

}