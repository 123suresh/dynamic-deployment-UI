import { call, takeLatest, put } from "redux-saga/effects";
import {
  CREATE_WORDPRESS,
  DELETE_WORDPRESS,
  FETCH_WORDPRESS_DETAILS,
  FETCH_WORDPRESS_DETAILS_SUCCESS,
} from "../action/wordpress";
import axios from "axios";
import endpoints from "../constant/endpoints";
// import endpoints from "../../../../../constants/endpoints";
// import { sessionTokenSelector } from "../../../../login/redux/selectors";

function callWordpressDetails(sessionToken, payload) {
  const config = {
    headers: {
      // Authorization: "basic " + sessionToken,
      "Content-Type": "application/json",
    },
  };
  return axios.get(endpoints.WORDPRESS.CREATE_WORDPRESS, config);
}

// Generator Call
function* fetchWordpressDetails() {
  try {
    //   const sessionToken = yield select(sessionTokenSelector);
    const response = yield call(callWordpressDetails);
    const data = response.data;
    if (data) {
      yield put({
        type: FETCH_WORDPRESS_DETAILS_SUCCESS,
        data: { data: data.data },
      });
    }
  } catch (error) {
    console.log("error while fetching wordpress details");
    //   yield put({ type: GET_ALERT_STATUS_FAILURE });
    // toast.error("Error while fetching alert status");
  }
}

function callCreateWordPress(payload) {
  const config = {
    headers: {
      // Authorization: "basic " + sessionToken,
      "Content-Type": "application/json",
    },
  };
  return axios.post(endpoints.WORDPRESS.CREATE_WORDPRESS, payload, config);
}

// Generator Call
function* createWordPress(payload) {
  try {
    console.log("from create wordpress saga", payload.data.data);
    // const sessionToken = yield select(sessionTokenSelector);
    const response = yield call(callCreateWordPress, payload.data.data);
    const data = response.data;
    if (data) {
      yield call(fetchWordpressDetails);
    }
    //   yield put({ type: GET_ALERT_STATUS_SUCCESS, data });
  } catch (error) {
    console.log("error while creating wordpress");
    //   yield put({ type: GET_ALERT_STATUS_FAILURE });
    // toast.error("Error while fetching alert status");
  }
}

function callDeleteWordpress(payload) {
  console.log("payload ===> ", payload);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.delete(
    endpoints.WORDPRESS.DELETE_WORDPRESS.replace(
      ":namespace",
      payload.namespace
    ),
    config
  );
}

// Generator Call
function* deleteWordpress(payload) {
  console.log("t => ", payload);
  try {
    const response = yield call(callDeleteWordpress, payload.data.data);
    const data = response.data;
    if (data) {
      yield call(fetchWordpressDetails);
    }
  } catch (error) {
    console.log("error while deleting wordpress");
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(CREATE_WORDPRESS, createWordPress);
  yield takeLatest(FETCH_WORDPRESS_DETAILS, fetchWordpressDetails);
  yield takeLatest(DELETE_WORDPRESS, deleteWordpress);
}
