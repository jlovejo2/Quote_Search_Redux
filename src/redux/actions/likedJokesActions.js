import * as types from "./actionTypes";
import * as likedJokesApi from "../../api/likedJokesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLikedJokesSuccess(likedJokes) {
  return {
    type: types.LOAD_LIKED_JOKES_SUCCESS,
    likedJokes,
  };
}

// export function favoriteQuoteSuccess(quote) {
//   return {
//     type: types.FAVORITE_QUOTE_SUCCESS,
//     quote,
//   };
// }

// export function favoriteQuote(quote) {
//   return function (dispatch) {
//     // dispatch(beginFavoritQuoteCall);
//     return likedQuotesApi
//       .favoritingQuote(quote)
//       .then((favoritedQuote) => {
//         console.log(
//           "quote favoriting, received response from api",
//           favoritedQuote
//         );
//         dispatch(favoriteQuoteSuccess(favoritedQuote));
//       })
//       .catch((error) => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

export function loadLikedJokes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return likedJokesApi
      .getJokes()
      .then((likedJokes) => {
        console.log("recieved jokes in action: ", likedJokes);
        dispatch(loadLikedJokesSuccess(likedJokes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
