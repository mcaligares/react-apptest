import { Container } from "unstated";
import Api from "../services/Api";
import Product, { sortById, sortByLowerPrice, sortByHigherPrice, filterByName } from "../models/Product";

export type ProductsStoreType = {
  loading: boolean,
  sortBy: Function,
  searchFor: Function,
  products: Array<Product>,
  filteredProducts: Array<Product>,
}

export default class ProductsStore extends Container<ProductsStoreType> {

  constructor(props: any = {}) {
    super();
    this.state = {
      loading: props.loading || true,
      products: props.products || [],
      filteredProducts: props.products,
      sortBy: this.sortBy,
      searchFor: this.searchFor
    };
  }

  async fetchAllProducts() {
    try {
      const products = await Api.getAllProducts();
      this.setState({ products, filteredProducts: products, loading: false });
    } catch (e) {
      // TODO handle error
      console.error('Error getting all products', e);
      this.setState({ loading: false });
    }
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
