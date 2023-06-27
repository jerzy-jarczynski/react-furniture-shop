import React from 'react';
import styles from './SearchPage.module.scss';
import FeatureBoxes from '../FeatureBoxes/FeatureBoxes';
import Brands from '../../layout/Brands/Brands';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { useLocation } from 'react-router-dom';
import ProductBox from '../../common/ProductBox/ProductBox';

const SearchPage = () => {
  const products = useSelector(state => getAllProducts(state));
  const filtered = [];
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchResult = searchParams.get('s')?.toLowerCase() || '';

  for (const product of products) {
    if (product.name.toLowerCase().includes(searchResult)) {
      filtered.push(product);
    }
  }
  if (filtered.length === 0) {
    return (
      <div>
        <FeatureBoxes />
        <div className={styles.root}>
          <div className='container'>
            <h1 className={styles.heading}>
              The search phrase is: &quot;{searchResult}&quot;
            </h1>
            <h1 className={styles.heading}>Match didn&apos;t found</h1>
          </div>
        </div>
        <Brands />
      </div>
    );
  } else
    return (
      <div>
        <FeatureBoxes />
        <div className={styles.root}>
          <div className='container'>
            <h1 className={styles.heading}>
              The search phrase is: &quot;{searchResult}&quot;
            </h1>
            <div className='row'>
              {filtered.map(item => (
                <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
                  <ProductBox {...item} photoClassName={styles.photo} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Brands />
      </div>
    );
};

export default SearchPage;
