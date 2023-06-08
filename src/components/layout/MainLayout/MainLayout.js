import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import CompareBarForm from '../../features/CompareBoxForm/CompareBarForm';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <CompareBarForm />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
