//selectors
export const getAllDeals = ({ deals }) => deals;

//actions
const createActionName = actionName => `app/deals/${actionName}`;

//action creators

const dealsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default dealsReducer;
