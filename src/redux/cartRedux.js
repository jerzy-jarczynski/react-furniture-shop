/* selectors */
export const getAll = ({ cart }) => cart.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHECKOUT = createActionName('CHECKOUT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const updateProduct = payload => ({ payload, type: UPDATE_PRODUCT });
export const checkout = payload => ({ payload, type: CHECKOUT });
export const getLocalCartData = () => {
  let localCartData = localStorage.getItem('myCart');
  if (localCartData) {
    return JSON.parse(localCartData);
  } else {
    return [];
  }
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      if (statePart.products.find(product => product.id === action.payload.id)) {
        return {
          ...statePart,
          products: statePart.products.map(product =>
            product.id === action.payload.id
              ? { ...product, amount: product.amount + 1 }
              : product
          ),
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, { ...action.payload, amount: 1 }],
        };
      }
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    case UPDATE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === action.payload.id ? { ...product, ...action.payload } : product
        ),
      };
    }
    case CHECKOUT: {
      return {
        ...statePart,
        products: [],
      };
    }
    default:
      return statePart;
  }
}
