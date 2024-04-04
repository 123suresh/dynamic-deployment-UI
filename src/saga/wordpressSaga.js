import { call, takeLatest, put } from "redux-saga/effects";
import { CREATE_WORDPRESS } from "../action/wordpress";
// import axios from "axios";
// import endpoints from "../../../../../constants/endpoints";
// import { sessionTokenSelector } from "../../../../login/redux/selectors";
  
//   function callAlertDashBoardStatus(sessionToken, payload) {
//     const config = {
//       headers: {
//         Authorization: "basic " + sessionToken,
//       },
//     };
//     return axios.get(
//       endpoints.ENVIRONMENT.GET_ALERTS_DASHBOARD_STATUS.replace(":eId", payload.data.id).replace(":state_name", payload.data.status_name),
//       config
//     );
//   }
  
  // Generator Call
  function* createWordPress(payload) {
    try {
        console.log("from create wordpress saga")
    //   const sessionToken = yield select(sessionTokenSelector);
    //   const response = yield call(callAlertDashBoardStatus, sessionToken, payload);
    //   const data = response.data;
    //   yield put({ type: GET_ALERT_STATUS_SUCCESS, data });
    } catch (error) {
        console.log("error while creating wordpress")
    //   yield put({ type: GET_ALERT_STATUS_FAILURE });
      // toast.error("Error while fetching alert status");
    }
  }

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(CREATE_WORDPRESS, createWordPress);
  }