import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { updateModes } from '../../../redux/modesRedux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let currentMode = '';

      if (width < 576) {
        currentMode = 'mobile';
      } else if (width < 992) {
        currentMode = 'tablet';
      } else {
        currentMode = 'desktop';
      }

      dispatch(updateModes(currentMode));
    };

    // Add event Listener
    window.addEventListener('resize', handleResize);

    // Set the initial mode
    handleResize();

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
