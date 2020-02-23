import streams from '../../apis/streams';
import actionList from './types';
import history from '../../history';


export const signIn = (userId) => {
  return {
    type: actionList.signIn,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: actionList.signOut
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: actionList.createStream, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: actionList.fetchStreams, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`)

  dispatch({ type: actionList.fetchStream, payload: response.data });
}; 

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: actionList.editStream, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: actionList.deleteStream, payload: id });
  history.push('/');
};