// import * as types from "../constant/actionTypes";
// import { postLoginRequest } from "../saga/apiCall";

// const getAuth = (token) => ({
//   type: types.IS_AUTH,
//   payload: token,
// });

// const handleLanguage = (language) => ({
//   type: types.HANDLE_LANGUAGE_CHANGE,
//   payload: language,
// });

// // export const auth = (token) => (dispatch) => {
// //   dispatch(getAuth(token));
// // };

// export const handleChangeLanguage = (language) => (dispatch) => {
//   dispatch(handleLanguage(language));
// };

// export const auth = (loginDetails) => async (dispatch) => {
//   try {
//     const response = await postLoginRequest(loginDetails, "user");
//     if(response){
//       console.log("fff => ", response)
//       dispatch(getAuth(response));
//     }
//   } catch (error) {
//     console.log("error");
//   }
// };



// export const authLogout = (logout) => async (dispatch) => {
//   try {
//       dispatch(getAuth(logout));
    
//   } catch (error) {
//     console.log("error");
//   }
// };


const PREFIX = '@Login'

export const LOGIN = `${PREFIX}/LOGIN`
export const GETPROFILE = `${PREFIX}/GETPROFILE`
export const LOGIN_SUCCESS = `${PREFIX}/LOGIN_SUCCESS`
export const LOGIN_FAILURE = `${PREFIX}/LOGIN_FAILURE`

export const login = (payload) =>({
  type: LOGIN,
  data:{payload}
})