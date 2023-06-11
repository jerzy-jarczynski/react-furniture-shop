import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

import { getActive } from '../../../redux/modesRedux';
import { connect } from 'react-redux';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products, mode } = this.props;
    const { activeCategory, activePage } = this.state;

    let productsOnPage = 8;

    if (mode) {
      if (mode.name === 'mobile') {
        productsOnPage = 1;
      } else if (mode.name === 'tablet') {
        productsOnPage = 2;
      }
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsOnPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts
              .slice(activePage * productsOnPage, (activePage + 1) * productsOnPage)
              .map(item => (
                <div key={item.id} className='col-3'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const mode = getActive(state);
  return {
    mode: mode,
  };
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,
    active: PropTypes.bool,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default connect(mapStateToProps)(NewFurniture);
