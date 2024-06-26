import { call, takeLatest, put } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS } from "../action/auth";
import axios from "axios";
import endpoints from "../constant/endpoints";
  
  function loginApiCall(payload) {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    return axios.post(
      // endpoints.ENVIRONMENT.GET_ALERTS_DASHBOARD_STATUS.replace(":eId", payload.data.id).replace(":state_name", payload.data.status_name),
      endpoints.AUTH.LOGIN,
      payload.data.payload,
      config
    );
  }
  
  // Generator Call
  function* login(payload) {
    try {
      const response = yield call(loginApiCall, payload);
      const data = response.data;
      if(data){
      // const data = data.data;
      console.log("checking saga ", data)
      yield put({ type: LOGIN_SUCCESS, data:{data:data.data} });
    }
    } catch (error) {
        console.log("error while loging")
    }
  }

  function* logout() {
    try {
      yield put({ type: LOGOUT_SUCCESS});
    } catch (error) {
        console.log("error while logout")
    }
  }

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(LOGOUT, logout);
  }