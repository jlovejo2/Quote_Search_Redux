import * as types from "./actionTypes";
import * as kanyeWestApi from "../../api/kanyeWestApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadKanyeWestQuotesSuccess(quotes) {
  return {
    type: types.LOAD_KANYE_WEST_QUOTES_SUCCESS,
    kanyeWest: quotes,
  };
}

//thunk
export function loadKanyeWestQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return kanyeWestApi
      .getKanyeWest()
      .then((resp) => {
        const author = "The Kanye West";
        const quoteObj = {
          quote: resp.quote,
          author: author,
        };
        dispatch(loadKanyeWestQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
