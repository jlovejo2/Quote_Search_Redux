import * as types from "./actionTypes";
import * as ronSwansonApi from "../../api/ronSwansonApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRonSwansonQuotesSuccess(quotes) {
  console.log("In Load ron Sqanson action success");
  return {
    type: types.LOAD_RON_SWANSON_QUOTES_SUCCESS,
    quotes: quotes /*can be written as just courses*/,
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
        console.log(resp);
        dispatch(loadRonSwansonQuotesSuccess(resp));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
