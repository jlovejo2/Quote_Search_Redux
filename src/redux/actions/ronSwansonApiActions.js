import * as types from "./actionTypes";
import * as ronSwansonApi from "../../api/ronSwansonApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRonSwansonQuotesSuccess(quotes) {
  console.log("In load Ron Swanson action success");
  return {
    type: types.LOAD_RON_SWANSON_QUOTES_SUCCESS,
    ronSwanson: quotes,
  };
}

//thunk
export function loadRonSwansonQuotes() {
  return function (dispatch) {
    console.log("in load RonSwanson action");
    dispatch(beginApiCall());
    return ronSwansonApi
      .getRonSwanson()
      .then((resp) => {
        console.log("in load RonSwanson action resp received");
        const author = "Ron Swanson";
        const quoteObj = {
          quote: resp[0],
          author: author,
        };
        dispatch(loadRonSwansonQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
