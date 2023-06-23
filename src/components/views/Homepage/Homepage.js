import React from 'react';
// import PropTypes from 'prop-types';
import Gallery from '../../layout/Gallery/Gallery';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../layout/Brands/Brands';
import Deals from '../../features/Deals/Deals';
import Featured from '../../features/Featured/Featured';
import Feedbacks from '../../features/Feedbacks/Feedbacks';

const Homepage = () => (
  <div className={styles.root}>
    <Featured />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedbacks />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
