import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchProgress() {
  return axios({
    method: "get",
    url: "http://localhost:3001/progress"
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchProgress);
    const data = response.data;

    yield put({ type: "API_CALL_SUCCESS", data });
  
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}