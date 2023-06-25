import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import styles from '../CartProductCard/CartProductCard.module.scss';
import Button from '../../../common/Button/Button';
import { removeProduct, updateProduct } from '../../../../redux/cartRedux';

const CartProductCard = ({ id, name, price, source, amount }) => {
  const dispatch = useDispatch();
  const [itemAmount, setAmount] = useState(amount);

  const totalForProduct = price * itemAmount;

  const handleClick = e => {
    e.preventDefault(e);
    dispatch(removeProduct(id));
  };

  const incrementAmount = e => {
    e.preventDefault();
    if (itemAmount < 10) {
      setAmount(itemAmount + 1);
      dispatch(updateProduct({ id, amount: itemAmount + 1 }));
    }
  };

  const decrementAmount = e => {
    e.preventDefault();
    if (itemAmount > 1) {
      setAmount(itemAmount - 1);
      dispatch(updateProduct({ id, amount: itemAmount - 1 }));
    }
  };

  return (
    <div className={`row ${styles.nextRows}`}>
      <div className='col-8 h-100'>
        <div className={`row w-100 ${styles.vertCenter}`}>
          <div className={styles.buttonContainer}>
            <Button className={styles.vertCenter} onClick={handleClick}>
              <AiOutlineCloseCircle className={styles.removeIcon} />
            </Button>
          </div>
          <div className={`col-3 text-center ${styles.vertCenter}`}>
            <div className={styles.productImage}>
              <img alt={name} src={source} />
            </div>
          </div>
          <div className={styles.vertCenter && styles.productLabel}>{name}</div>
        </div>
      </div>
      <div className='row col-3'>
        <div className={`mr-5 text-center ${styles.price}`}>${price.toFixed(2)}</div>
        <div className={`mr-5 text-center ${styles.amount}`}>
          <Button className={styles.decrement} onClick={decrementAmount}>
            -
          </Button>
          {itemAmount}
          <Button className={styles.increment} onClick={incrementAmount}>
            +
          </Button>
        </div>
        <div className={`text-center ${styles.priceTotal}`}>
          ${totalForProduct.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  source: PropTypes.string,
  amount: PropTypes.number,
  countSubTotal: PropTypes.func,
  totalForProduct: PropTypes.func,
};
export default CartProductCard;
