import _ from 'lodash';

import actionList from '../actions/types';

export default (state = {}, action) => {
  switch (action.type){
    case actionList.fetchStreams:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case actionList.fetchStream:
      return { ...state, [action.payload.id]: action.payload };
    case actionList.createStream:
      return { ...state, [action.payload.id]: action.payload };
    case actionList.editStream:
      return { ...state, [action.payload.id]: action.payload };
    case actionList.deleteStream:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};