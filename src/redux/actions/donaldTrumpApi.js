import * as types from "./actionTypes";
import * as donaldTrumpApi from "../../api/donaldTrumpApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDonaldTrumpQuotesSuccess(quotes) {
  return {
    type: types.LOAD_DONALD_TRUMP_QUOTES_SUCCESS,
    donaldTrump: quotes,
  };
}

//thunk
export function loadDonaldTrumpQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return donaldTrumpApi
      .getRandomDonaldTrumpQuote()
      .then((resp) => {
        const author = "Donald Trump";
        const subject = resp.tag[0];
        const quoteObj = {
          quote: resp.value,
          subject,
          author: author,
        };
        dispatch(loadDonaldTrumpQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
