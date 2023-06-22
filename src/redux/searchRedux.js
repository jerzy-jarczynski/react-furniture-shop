import { nanoid } from 'nanoid';

//selectors
export const getAllSearch = ({ search }) => search;

//actions
const createActionName = actionName => `app/search/${actionName}`;
const REMOVE_SEARCH = createActionName('REMOVE_SEARCH');
const ADD_SEARCH = createActionName('ADD_SEARCH');

//action creators
export const removeSearch = payload => ({ type: REMOVE_SEARCH, payload });
export const addSearch = payload => ({ type: ADD_SEARCH, payload });

const searchReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_SEARCH:
      return statePart.filter(search => search.id !== action.payload.id);
    case ADD_SEARCH:
      return [{ id: nanoid(), ...action.payload }, ...statePart];
    default:
      return statePart;
  }
};

export default searchReducer;
