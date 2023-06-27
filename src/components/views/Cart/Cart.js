import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import styles from './Cart.module.scss';

import { getAll } from '../../../redux/cartRedux';
import CartProductCard from './CartProductCard/CartProductCard';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalPrice, setSubtotalPrice] = useState(0);
  const [deliveryFeePrice, setDeliveryFeePrice] = useState(0);
  const cartProducts = useSelector(getAll);

  const cartTotalPrice = cartProducts => {
    let subTotal = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      subTotal += cartProducts[i].price * cartProducts[i].amount;
    }
    const deliveryFeePrice = () => {
      let deliveryFee = 0;
      if (subTotal) {
        return deliveryFee + 20;
      }
      return 0;
    };
    let deliveryFee = deliveryFeePrice();
    let total = subTotal + deliveryFeePrice();
    return { subTotal, total, deliveryFee };
  };

  useEffect(() => {
    const { subTotal, total, deliveryFee } = cartTotalPrice(cartProducts);
    setSubtotalPrice(subTotal);
    setDeliveryFeePrice(deliveryFee);
    setTotalPrice(total);
    localStorage.setItem('myCart', JSON.stringify(cartProducts));
  }, [cartProducts]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={'col-auto ' + styles.heading}>
            <h3>Cart</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={styles.cart}>
          <div className={`row ${styles.firstBar}`}>
            <span className='col-8'>
              <div className='row'>
                <span className='col-2'></span>
                <span className={`col-10 ps-4 ${styles.left}`}>PRODUCT</span>
              </div>
            </span>
            <span className={styles.priceBar}>PRICE</span>
            <span className={styles.quantity}>QUANTITY</span>
            <span>TOTAL</span>
          </div>
          {cartProducts.map(singleItem => (
            <CartProductCard
              key={singleItem.id}
              id={singleItem.id}
              amount={singleItem.amount}
              name={singleItem.name}
              price={singleItem.price}
              source={singleItem.source}
            ></CartProductCard>
          ))}
          <div className={`row ${styles.secondBar}`}></div>
        </div>
        <div className='row mx-0'>
          <div className='col-6'></div>
          <div className='col-4 mb-4'>
            <div className={`row ${styles.cartTotalsTop}`}>
              <div>
                <span>Cart totals</span>
              </div>
            </div>
            <div className={`row text-center ${styles.cartTotalsRows}`}>
              <div className='col-5'>Subtotal</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.price}`}>
                <span>${subTotalPrice}</span>
              </div>
            </div>
            <div className={`row text-center ${styles.cartTotalsRows}`}>
              <div className='col-5'>Delivery Fee</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.price}`}>
                <span>${deliveryFeePrice}</span>
              </div>
            </div>
            <div className={`row text-center ${styles.cartTotalsRows}`}>
              <div className='col-5'>Total</div>
              <div className={`col-7 ${styles.borderLeft} ${styles.priceTotal}`}>
                <span>${totalPrice}</span>
              </div>
            </div>
            <div className={`row ${styles.cartTotalsBottom}`}>
              <div className='col-12'>
                <Button variant='main' type='submit' className={styles.checkoutButton}>
                  GO TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  source: PropTypes.string,
};

export default Cart;
