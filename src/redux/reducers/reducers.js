import { actionTypes } from 'redux/types/types';

const INITIAL_STATE_QUERY = {
  query: '',
};

export const searchCats = (state = INITIAL_STATE_QUERY, action) => {
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

const INITIAL_STATE_CATS = {
  cats: [],
};

export const requestCats = (state = INITIAL_STATE_CATS, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CATS_START:
      return {
        ...state,
        isPending: true,
      };
    case actionTypes.REQUEST_CATS_SUCCESS:
      return {
        ...state,
        cats: action.payload,
        isPending: false,
      };
    case actionTypes.REQUEST_CATS_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
