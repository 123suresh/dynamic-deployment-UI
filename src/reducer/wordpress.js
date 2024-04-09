import {
  CREATE_WORDPRESS,
  CREATE_WORDPRESS_FAILURE,
  CREATE_WORDPRESS_SUCCESS,
  FETCH_WORDPRESS_DETAILS,
  FETCH_WORDPRESS_DETAILS_FAILURE,
  FETCH_WORDPRESS_DETAILS_SUCCESS,
} from "../action/wordpress";

const initialState = {
  wordpressDetails: null,
};

const wordpressReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case FETCH_WORDPRESS_DETAILS:
      return {
        ...state,
      };
    case FETCH_WORDPRESS_DETAILS_SUCCESS:
      return {
        ...state,
        wordpressDetails: payload.data,
      };
    case FETCH_WORDPRESS_DETAILS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default wordpressReducer;
