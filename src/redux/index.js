import wordpressReducer from "../reducer/wordpress";
import movieInfo from "../reducer/movie";
import Auth from "../reducer/auth";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // movieInfo,
    // wordpressReducer,
    Auth,
})

export default (state, action) =>
//   rootReducer(action.type === LOGOUT_SUCCESS ? undefined : state, action);
  rootReducer(state, action);