import * as types from "./actionTypes";
import * as taylorSwiftApi from "../../api/taylorSwiftApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadTaylorSwiftQuotesSuccess(quotes) {
  return {
    type: types.LOAD_TAYLOR_SWIFT_QUOTES_SUCCESS,
    taylorSwift: quotes,
  };
}

//thunk
export function loadTaylorSwiftQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taylorSwiftApi
      .getTaylorSwift()
      .then((resp) => {
        const author = "T Swift";
        const quoteObj = {
          quote: resp.quote,
          author: author,
        };
        dispatch(loadTaylorSwiftQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
