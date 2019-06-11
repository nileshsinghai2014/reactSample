import { call, put } from 'redux-saga/effects';
import { updateUsers } from '../actions';
import fetch from 'isomorphic-fetch';

function* getUsers() {
  try {
    const response = yield fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());
    yield put(updateUsers(response));
  } catch(err) {
    console.log(err)
  }
}

export default function* appSaga() {
  yield call(getUsers);
}