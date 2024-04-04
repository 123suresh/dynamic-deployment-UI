import { CREATE_WORDPRESS, CREATE_WORDPRESS_FAILURE, CREATE_WORDPRESS_SUCCESS } from "../action/wordpress";
import initialState from "./initialState";

const wordpressReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case CREATE_WORDPRESS:
      return {
        ...state,
      };
    case CREATE_WORDPRESS_SUCCESS:
      return {
        ...state,
      };
    case CREATE_WORDPRESS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default wordpressReducer;
