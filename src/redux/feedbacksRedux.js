/* selectors */
export const getAll = ({ feedbacks }) => feedbacks;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
