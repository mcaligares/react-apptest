import React from 'react';
import { Provider, Subscribe } from 'unstated';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppState from './Store';
import User from './models/User';
import Footer from './components/footer/Footer';
import HeaderTop from './components/header/HeaderTop';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';

const emptyUser = new User({});

export default class App extends React.Component {

  user: User;
  container = new AppState({
    loading: true,
    products: [],
    user: emptyUser
  });

  componentDidMount() {
    this.container.fetchAllData();
  }

  render() {
    return (
      <Router>
        <Provider inject={[this.container]}>
          <Subscribe to={[this.container]}>
            { app =>
              <div className="App">

                <HeaderTop user={ app.state.currentUser } />

                <Route path="/" exact component={ Catalog }/>

                <Route path="/profile" component={ Profile } />

                <Footer />

              </div>
            }
          </Subscribe>
        </Provider>
      </Router>
    );
  }

}
