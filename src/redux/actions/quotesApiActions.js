import * as types from "./actionTypes";
import * as ronSwansonApi from "../../api/ronSwansonApi";
import * as taylorSwiftApi from "../../api/taylorSwiftApi";
import * as quoteGardenApi from "../../api/quoteGardenApi";
import * as kanyeWestApi from "../../api/kanyeWestApi";
import * as donaldTrumpApi from "../../api/donaldTrumpApi";
import { quotesApiArray } from "../../api/apiInfo";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as likedQuotesApi from "../../api/likedQuotesApi";

export function loadRonSwansonQuotesSuccess(quotes) {
  console.log("In load Ron Swanson action success");
  return {
    type: types.LOAD_RON_SWANSON_QUOTES_SUCCESS,
    quotes,
  };
}

export function loadTaylorSwiftQuotesSuccess(quotes) {
  return {
    type: types.LOAD_TAYLOR_SWIFT_QUOTES_SUCCESS,
    quotes,
  };
}

export function loadRandQuoteGardenSuccess(quotes) {
  console.log("In load rand quote garden action success");
  return {
    type: types.LOAD_RAND_QUOTE_GARDEN_SUCCESS,
    quotes,
  };
}

export function loadKanyeWestQuotesSuccess(quotes) {
  return {
    type: types.LOAD_KANYE_WEST_QUOTES_SUCCESS,
    quotes,
  };
}

export function loadDonaldTrumpQuotesSuccess(quotes) {
  return {
    type: types.LOAD_DONALD_TRUMP_QUOTES_SUCCESS,
    quotes,
  };
}

export function deleteQuoteClientSideOptimisitc(quoteId) {
  return {
    type: types.DELETE_QUOTE_CIENT_SIDE_OPTIMISTIC,
    quoteId,
  };
}

export function favoriteQuoteSuccess(quoteId) {
  return {
    type: types.FAVORITE_QUOTE_SUCCESS,
    quoteId,
  };
}

export function deleteQuote(quoteId) {
  return function (dispatch, getState) {
    console.log("in quote delete in quote action ", getState);
    dispatch(deleteQuoteClientSideOptimisitc(quoteId));
    return quoteId;
  };
}

export function saveQuote() {
  return function (dispatch) {
    dispatch();
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
          image: quotesApiArray[0].imgLink,
        };
        dispatch(loadRonSwansonQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
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
          image: quotesApiArray[3].imgLink,
        };
        dispatch(loadTaylorSwiftQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

//thunk
export function loadRandQuoteGardenQuote() {
  return function (dispatch) {
    console.log("in load rand quote garden thunk");
    dispatch(beginApiCall());
    return quoteGardenApi
      .getRandomQuoteGarden()
      .then((resp) => {
        console.log("rand quote garden resp received", resp);

        const quoteObj = {
          quote: resp.quote.quoteText,
          author: resp.quote.quoteAuthor,
        };

        dispatch(loadRandQuoteGardenSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

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
          image: quotesApiArray[2].imgLink,
        };
        dispatch(loadKanyeWestQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadDonaldTrumpQuotes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return donaldTrumpApi
      .getRandomDonaldTrumpQuote()
      .then((resp) => {
        const author = "Donald Trump";
        const subject = resp.tags[0];
        const quoteObj = {
          quote: resp.value,
          subject,
          author: author,
          image: quotesApiArray[4].imgLink,
        };
        dispatch(loadDonaldTrumpQuotesSuccess(quoteObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
