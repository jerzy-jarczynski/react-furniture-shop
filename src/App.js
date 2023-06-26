import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import CategoryPage from './components/views/CategoryPage/CategoryPage';
import SearchPage from './components/features/SearchPage/SearchPage';
import Cart from './components/views/Cart/Cart';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <MainLayout>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ProductList} />
        <Route exact path='/product' component={ProductPage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/category' component={CategoryPage} />
        <Route exact path='/cart' component={Cart} />
      </MainLayout>
    </HashRouter>
  </Provider>
);

export default App;
