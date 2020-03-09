import {actionTypes} from 'redux/types/types';

const INITIAL_STATE = {
  query: '',
};

const searchCatsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default searchCatsReducer;
