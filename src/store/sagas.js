import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import axios from 'axios';
import { getListAction } from './actions';

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getMyList);
};

function* getMyList() {
  const res = yield axios.get('https://www.easy-mock.com/mock/5ca35680c98be737b0af814f/test');
  const action = getListAction(res.data);
  yield put(action);
};

export default mySaga;
