/* selectors */
export const getAll = ({ brands }) => brands;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
