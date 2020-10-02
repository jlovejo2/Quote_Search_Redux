import * as types from "./actionTypes";
import * as likedJokesApi from "../../api/likedJokesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { likedJokes } from "../../../tools/mockData";

export function loadLikedJokesSuccess(likedJokes) {
  return {
    type: types.LOAD_LIKED_JOKES_SUCCESS,
    likedJokes,
  };
}

export function deleteLikedJokeOptimistic(joke) {
  return {
    types: types.DELETE_LIKED_JOKE_OPTIMISTIC,
    joke,
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

export function deleteLikedJoke(joke) {
  return function (dispatch) {
    return likedJokesApi.deleteJoke(joke).then((deletedJoke) => {
      console.log("liked joke to be deleted: ", deletedJoke);
      dispatch(deleteLikedJokeOptimistic(deletedJoke));
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
