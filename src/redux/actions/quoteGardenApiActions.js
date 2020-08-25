import * as types from "./actionTypes";
import * as quoteGardenApi from "../../api/quoteGardenApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRandQuoteGardenSuccess(quotes) {
  console.log("In load rand quote garden action success");
  return {
    type: types.LOAD_RAND_QUOTE_GARDEN_SUCCESS,
    quoteGarden: quotes,
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
