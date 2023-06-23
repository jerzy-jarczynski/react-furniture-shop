import React, { useEffect, useState } from 'react';

import Button from '../../common/Button/Button';
import styles from './Cart.module.scss';

import { getAll } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotalPrice, setSubtotalPrice] = useState(0);
  const cartProducts = useSelector(getAll);

  const cartTotalPrice = cartProducts => {
    let subTotal = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      subTotal += cartProducts[i].price * cartProducts[i].amount;
    }
    const deliveryFeePrice = () => {
      if (subTotal) {
        return 20;
      }
      return 0;
    };
    let total = subTotal + deliveryFeePrice();
    return { subTotal, total };
  };

  useEffect(() => {
    const { subTotal, total } = cartTotalPrice(cartProducts);
    setSubtotalPrice(subTotal);
    setTotalPrice(total);
  }, [cartProducts]);
  return (
    <div>
      <div>
        <div className='container'>
          <span className='col-6 d-inline-flex justify-content-start ps-1'>Cart</span>
          <span className='col-6 d-inline-flex justify-content-end pe-1'></span>
        </div>
      </div>
      <div className='container'>
        <div>
          <div className='row'>
            <span className='col-8'>
              <div className='row'>
                <span className='col-2'></span>
                <span className='col-10 ps-4'>PRODUCT</span>
              </div>
            </span>
            <span className='col-1'>PRICE</span>
            <span className='col-2'>QUANTITY</span>
            <span className='col-1'>TOTAL</span>
          </div>
          <div className='row'>
            <span className='col-6 d-flex justify-content-end'>
              <Button variant='main' type='submit'>
                UPDATE CART
              </Button>
            </span>
          </div>
        </div>
        <div className='row mx-0'>
          <div className='col-6'></div>
          <div className='col-6 mb-4'>
            <div className='row'>
              <div className='col-5'></div>
              <div className='col-7'>
                <span>Cart totals</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-5'>Subtotal</div>
              <div className='col-7'>
                <span>${subTotalPrice}</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-5'>Total</div>
              <div className='col-7'>
                <span>${totalPrice}</span>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <Button variant='main' type='submit'>
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

export default Cart;
