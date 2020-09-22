import * as types from "./actionTypes";
import * as likedQuotesApi from "../../api/likedQuotesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//these four functions below are called action creators
export function loadLikedQuotesSuccess(likedQuotes) {
  return {
    type: types.LOAD_LIKED_QUOTES_SUCCESS,
    likedQuotes /*can be written as just courses*/,
  };
}

export function loadLikedQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return likedQuotesApi
      .getQuotes()
      .then((quotes) => {
        dispatch(loadLikedQuotesSuccess(quotes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
