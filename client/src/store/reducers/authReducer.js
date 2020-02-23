import actionList from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case actionList.signIn:
      return {...state, isSignedIn: true, userId: action.payload};
    case actionList.signOut:
      return {...state, isSignedIn: false, userId: null};
    default:
      return state;
  } 
};