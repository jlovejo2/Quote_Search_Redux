import * as types from "./actionTypes";
import * as likedQuotesApi from "../../api/likedQuotesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLikedQuotesSuccess(likedQuotes) {
  return {
    type: types.LOAD_LIKED_QUOTES_SUCCESS,
    likedQuotes,
  };
}

export function deleteQuoteOptimistic(quote) {
  return {
    type: types.DELETE_QUOTE_OPTIMISTIC,
    quote,
  };
}

export function loadLikedQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return likedQuotesApi
      .getQuotes()
      .then((quotes) => {
        console.log("recieved quotes in action: ", quotes);
        dispatch(loadLikedQuotesSuccess(quotes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteQuote(quote) {
  return function (dispatch) {
    dispatch(deleteQuoteOptimistic(quote));
    return likedQuotesApi.deleteQuote(quote.id);
  };
}
