// import * as types from "../constant/actionTypes";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../action/auth";

const INITIAL_STATE = {
  loginDetail: null,
  token:null,
};
function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case types.IS_AUTH:
    //   payload
    //     ? localStorage.setItem("token", payload)
    //     : localStorage.removeItem("token");
    //   return { ...state, isAuthenticated: payload };
    // case types.IS_AUTH:
    //   return {
    //     ...state,
    //     isAuthenticated: action.payload,
    //   };
    case LOGIN_SUCCESS:
      console.log("reducer action => ", action.data)
      return {
        ...state,
        loginDetail: action.data.data.user,
        token: action.data.data.access_token
      };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default Auth;
