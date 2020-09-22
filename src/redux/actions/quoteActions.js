import * as types from "./actionTypes";
import * as quoteApi from "../../api/quoteApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//these four functions below are called action creators
export function loadQuotesSuccess(quotes) {
  return {
    type: types.LOAD_QUOTES_SUCCESS,
    quotes /*can be written as just courses*/,
  };
}
