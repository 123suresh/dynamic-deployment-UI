import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_WORDPRESS, FETCH_WORDPRESS_DETAILS, FETCH_WORDPRESS_DETAILS_SUCCESS } from "../action/wordpress";
import axios from "axios";
import endpoints from "../constant/endpoints";
// import endpoints from "../../../../../constants/endpoints";
// import { sessionTokenSelector } from "../../../../login/redux/selectors";
  
  function callCreateWordPress(payload) {
    const config = {
      headers: {
        // Authorization: "basic " + sessionToken,
        "Content-Type": "application/json",
      },
    };
    return axios.post(
      endpoints.WORDPRESS.CREATE_WORDPRESS,
      payload,
      config
    );
  }
  
  // Generator Call
  function* createWordPress(payload) {
    try {
        console.log("from create wordpress saga", payload.data.data)
      // const sessionToken = yield select(sessionTokenSelector);
      const response = yield call(callCreateWordPress, payload.data.data);
      const data = response.data;
    //   yield put({ type: GET_ALERT_STATUS_SUCCESS, data });
    } catch (error) {
        console.log("error while creating wordpress")
    //   yield put({ type: GET_ALERT_STATUS_FAILURE });
      // toast.error("Error while fetching alert status");
    }
  }

  function callWordpressDetails(sessionToken, payload) {
    const config = {
      headers: {
        // Authorization: "basic " + sessionToken,
        "Content-Type": "application/json",
      },
    };
    return axios.get(
      // endpoints.ENVIRONMENT.GET_ALERTS_DASHBOARD_STATUS.replace(":eId", payload.data.id).replace(":state_name", payload.data.status_name),
      config
    );
  }
  
  // Generator Call
  function* fetchWordpressDetails() {
    try {
    //   const sessionToken = yield select(sessionTokenSelector);
      const response = yield call(callWordpressDetails);
      const data = response.data;
      yield put({ type: FETCH_WORDPRESS_DETAILS_SUCCESS, data });
    } catch (error) {
        console.log("error while fetching wordpress details")
    //   yield put({ type: GET_ALERT_STATUS_FAILURE });
      // toast.error("Error while fetching alert status");
    }
  }

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(CREATE_WORDPRESS, createWordPress);
    yield takeLatest(FETCH_WORDPRESS_DETAILS, fetchWordpressDetails);
  }