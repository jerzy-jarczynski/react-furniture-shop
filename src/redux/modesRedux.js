/* selectors */
export const getActive = ({ modes }) => modes.find(mode => mode.active === true);

/* action name creator */
const reducerName = 'mode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_MODES = createActionName('UPDATE_MODES');

/* action creators */
export const updateModes = modeName => ({ type: UPDATE_MODES, payload: modeName });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_MODES:
      return statePart.map(mode =>
        mode.name === action.payload
          ? { ...mode, active: true }
          : { ...mode, active: false }
      );
    default:
      return statePart;
  }
}
