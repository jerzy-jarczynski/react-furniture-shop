/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getFeatured = ({ products }) =>
  products.filter(item => item.featured === true);

/* actions */
const createActionName = actionName => `app/lists/${actionName}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action creators */

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(products =>
        products.id === action.payload
          ? { ...products, isFavorite: !products.isFavorite }
          : products
      );

    default:
      return statePart;
  }
}
