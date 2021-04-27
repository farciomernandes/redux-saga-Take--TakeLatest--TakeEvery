import { takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(3000);
  //put = awaits the execution of all calls to apply the final status of all calls simultaneously.
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  //takeLates = cancels all calls to the function and makes only the last one.
  yield takeLatest('INCREMENT', onIncrement);
}

//take = if if the function is repeated, and there is a delay, it may not execute every time.
//takeEvery = creates "subsagas" that perform all the functions called even if they have a delay.
