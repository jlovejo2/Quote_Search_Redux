import * as types from "./actionTypes";
import * as likedJokesApi from "../../api/likedJokesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLikedJokesSuccess(likedJokes) {
  return {
    type: types.LOAD_LIKED_JOKES_SUCCESS,
    likedJokes,
  };
}

export function favoriteJokeSuccess(joke) {
  return {
    type: types.FAVORITE_JOKE_SUCCESS,
    joke,
  };
}

export function favoriteJoke(joke) {
  return function (dispatch) {
    return likedJokesApi
      .favoritingJoke(joke)
      .then((favoritedJoke) => {
        console.log(
          "quote favoriting, received response from api",
          favoritedJoke
        );
        dispatch(favoriteJokeSuccess(favoritedJoke));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

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
