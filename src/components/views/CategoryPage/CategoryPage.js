import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import styles from './CategoryPage.module.scss';
import Brands from '../../layout/Brands/Brands';
import ProductBox from '../../common/ProductBox/ProductBox';
import { getAllProducts } from '../../../redux/productsRedux';

const CategoryPage = () => {
  const categories = useSelector(state => getAllCategories(state));
  const products = useSelector(state => getAllProducts(state));

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const categoryName = searchParams.get('s')?.toLowerCase() || '';

  const filteredCategory = [];
  const filteredProducts = [];

  for (const category of categories) {
    if (category.name.toLowerCase() === categoryName) {
      filteredCategory.push(category);
    }
  }

  if (filteredCategory.length === 0 && filteredProducts.length === 0) {
    return (
      <div>
        <FeatureBoxes />
        <div className={styles.root}>
          <div className='container'>
            <h1 className={styles.heading}>
              Wybrana kategoria to: &quot;{categoryName}&quot;
            </h1>
            <h1 className={styles.heading}>Nie znaleziono kategorii</h1>
          </div>
        </div>
        <Brands />
        {/* Place for Feedback section*/}
      </div>
    );
  }

  for (const product of products) {
    if (product.category.toLowerCase() === filteredCategory[0].name.toLowerCase()) {
      filteredProducts.push(product);
    }
  }

  return (
    <div>
      <FeatureBoxes />
      <div className={styles.root}>
        <div className='container'>
          <h1 className={styles.heading}>
            Wybrana kategoria to: &quot;{categoryName}&quot;
          </h1>
          <div className='row'>
            {filteredProducts.map(item => (
              <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brands />
      {/* Place for Feedback section*/}
    </div>
  );
};

export default CategoryPage;
