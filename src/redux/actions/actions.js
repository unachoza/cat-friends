import {actionTypes} from 'redux/types/types';

export const setSearchField = (text) => ({
 type: actionTypes.CHANGE_SEARCH_FIELD, 
 payload: text
})