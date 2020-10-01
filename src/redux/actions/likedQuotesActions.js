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

export function favoriteQuoteSuccess(quote) {
  return {
    type: types.FAVORITE_QUOTE_SUCCESS,
    quote,
  };
}

export function favoriteQuote(quote) {
  console.log("quote structure to be favorited in action: ", quote);
  return function (dispatch) {
    dispatch(favoriteQuoteSuccess(quote));
    return likedQuotesApi
      .favoriteQuote(quote)
      .then((favoritedQuote) => {
        console.log("quote favoriting", favoritedQuote);
        dispatch(favoriteQuoteSuccess(favoritedQuote));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadLikedQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return likedQuotesApi
      .getQuotes()
      .then((likedQuotes) => {
        console.log("recieved quotes in action: ", likedQuotes);
        dispatch(loadLikedQuotesSuccess(likedQuotes));
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
