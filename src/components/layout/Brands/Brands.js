import styles from './Brands.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';

const Brands = () => {
  const brands = useSelector(state => getAll(state));

  return (
    <div className={styles.root}>
      <div className='container my-10'>
        <div className='row d-flex'>
          {brands.map(brand => (
            <div key={brand.id} className={styles.brandContainer}>
              <img
                key={brand.id}
                className={styles.brandImage}
                src={brand.source}
                alt={brand.brandName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
