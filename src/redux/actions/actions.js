import { actionTypes } from 'redux/types/types';

export const setSearchField = text => ({
  type: actionTypes.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestCats = () => dispatch => {
  dispatch({ type: actionTypes.REQUEST_CATS_START });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.REQUEST_CATS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: actionTypes.REQUEST_CATS_FAILURE, payload: error }));
};
