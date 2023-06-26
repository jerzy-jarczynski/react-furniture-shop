/* selectors */
export const getAllCategories = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
