import Product from "../models/Product";

export default class ProductFavorite {
  constructor(
    public count: number = 0,
    public product: Product = new Product({})
  ) {}
}

export function getFavoriteProduct(products: Array<Product>) {

  if (products.length === 1) return new ProductFavorite(1, products[0]);

  const countsById = getCountsById(products);
  const maxCountAndId = getMaxCount(countsById);

  return populateProduct(maxCountAndId, products);
}

const getCountsById = (products: Array<Product>) => {
  const countsById: any = {};

  products.map((product: Product) => (product._id)).reduce((a: any, value: string) => {
    countsById[value] = (countsById[value] || 0) + 1;
    return a;
  });
  return countsById;
};

const getMaxCount = (countsById: any) => {
  let favorite: any = {};

  Object.keys(countsById).forEach((key: string) => {
    if (!favorite.count) {
      favorite = { id: key, count: countsById[key] };
    }

    if (favorite.count < countsById[key]) {
      favorite = { id: key, count: countsById[key] };
    }
  });

  return favorite;
};

const populateProduct = (countAndId: any, products: Array<Product>) => {
  const product = products.find((product: Product) => product._id === countAndId.id);

  return product ? new ProductFavorite(countAndId.count, product) : new ProductFavorite();
}