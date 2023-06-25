import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import SearchPage from './components/features/SearchPage/SearchPage';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop/:categoryId" component={ProductList} />
          <Route exact path="/product/:productId" component={ProductPage} />
          <Route exact path="/search/:searchResult" component={SearchPage} />
        </Switch>
      </MainLayout>
    </HashRouter>
  </Provider>
);

export default App;
