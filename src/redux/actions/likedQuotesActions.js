import * as types from "./actionTypes";
import * as likedQuotesApi from "../../api/likedQuotesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLikedQuotesSuccess(likedQuotes) {
  return {
    type: types.LOAD_LIKED_QUOTES_SUCCESS,
    likedQuotes,
  };
}

export function deleteLikedQuoteOptimistic(quote) {
  return {
    type: types.DELETE_LIKED_QUOTE_OPTIMISTIC,
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
  return function (dispatch) {
    // dispatch(beginFavoritQuoteCall);
    return likedQuotesApi
      .favoritingQuote(quote)
      .then((favoritedQuote) => {
        console.log(
          "quote favoriting, received response from api",
          favoritedQuote
        );
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
    dispatch(deleteLikedQuoteOptimistic(quote));
    return likedQuotesApi.deleteQuote(quote);
  };
}
