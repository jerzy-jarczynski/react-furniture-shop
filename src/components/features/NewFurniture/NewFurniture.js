import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareBar from '../../layout/CompareBar/CompareBar';
import { nanoid } from 'nanoid';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'bed',
      productsOnPage: 8,
      activeCompare: [],
      isButtonClicked: {},
      isMaxCompareReached: false,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSwipeLeft = this.handleSwipeLeft.bind(this);
    this.handleSwipeRight = this.handleSwipeRight.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  handleCompareClick(newCompareName, newCompareId, event) {
    event.preventDefault();
    const { activeCompare, isButtonClicked } = this.state;

    if (isButtonClicked[newCompareId]) {
      const updateCompare = activeCompare.filter(
        compare => compare.ItemId !== newCompareId
      );
      const updateClicked = { ...isButtonClicked };
      delete updateClicked[newCompareId];
      this.setState({
        activeCompare: updateCompare,
        isButtonClicked: updateClicked,
        isMaxCompareReached: false,
      });
    } else {
      if (activeCompare.length >= 4) {
        return;
      } else {
        if (activeCompare.length >= 3) {
          this.setState({ isMaxCompareReached: true });
        }
      }

      const updateCompare = [
        ...activeCompare,
        { name: newCompareName, id: nanoid(), ItemId: newCompareId },
      ];
      const updateClicked = { ...isButtonClicked, [newCompareId]: true };
      this.setState({ activeCompare: updateCompare, isButtonClicked: updateClicked });
    }
  }

  deleteCompareProduct = newCompares => {
    const idArray = {};
    for (const i of newCompares) {
      idArray[i.ItemId] = true;
    }
    this.setState({
      activeCompare: newCompares,
      isButtonClicked: idArray,
      isMaxCompareReached: false,
    });
  };

  // Swipeable action functions
  handleSwipeLeft() {
    const { activePage } = this.state;
    if (activePage < this.calculatePagesCount() - 1) {
      this.setState({ activePage: activePage + 1 });
    }
  }

  handleSwipeRight() {
    const { activePage } = this.state;
    if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    }
  }

  calculatePagesCount() {
    const { products } = this.props;
    const { activeCategory } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    return Math.ceil(categoryProducts.length / this.state.productsOnPage);
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;
    const pagesCount = this.calculatePagesCount();
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={this.handlePageChange.bind(this, i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }
    const categoryProducts = products.filter(item => item.category === activeCategory);

    return (
      <Swipeable leftAction={this.handleSwipeLeft} rightAction={this.handleSwipeRight}>
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
                          className={item.id === activeCategory ? styles.active : ''}
                          onClick={this.handleCategoryChange.bind(this, item.id)}
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
          </div>
          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-12 col-sm-6 col-lg-3'>
                <ProductBox
                  {...item}
                  action={event => this.handleCompareClick(item.name, item.id, event)}
                  isInCompare={this.state.isButtonClicked[item.id]}
                  isMaxCompareReached={this.state.isMaxCompareReached}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={this.state.activeCompare.length >= 1 ? '' : styles.invisible}>
          <CompareBar
            compareState={this.state.activeCompare}
            action2={this.deleteCompareProduct}
            isButtonClicked={this.state.isButtonClicked}
          />
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
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

export default NewFurniture;
