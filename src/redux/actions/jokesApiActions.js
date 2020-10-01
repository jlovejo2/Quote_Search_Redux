import * as types from "./actionTypes";
import * as dadJokeApi from "../../api/IcanhazdadjokeApi";
import * as chuckNorrisJokeApi from "../../api/chuckNorrisJokeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDadJokeSuccess(jokes) {
  console.log("In load Dad joke action success");
  return {
    type: types.LOAD_DAD_JOKES_SUCCESS,
    jokes,
  };
}

export function loadChuckNorrisJokesSuccess(jokes) {
  console.log("In load Chuck Norris action success");
  return {
    type: types.LOAD_CHUCK_NORRIS_JOKES_SUCCESS,
    jokes,
  };
}

export function loadDadJokes() {
  return function (dispatch) {
    console.log("in Dad joke action");
    dispatch(beginApiCall());
    return dadJokeApi
      .getDadJoke()
      .then((resp) => {
        console.log("in load Dad joke action resp received", resp);
        const author = "Dad";
        const jokeObj = {
          id: "",
          title: resp.joke,
          author: author,
          //   image: quotesApiArray[0].imgLink,
        };
        dispatch(loadDadJokeSuccess(jokeObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadChuckNorrisJokes() {
  return function (dispatch) {
    console.log("in Dad joke action");
    dispatch(beginApiCall());
    return chuckNorrisJokeApi
      .getChuckNorrisJoke()
      .then((resp) => {
        console.log("in load Chuck Norris joke action resp received", resp);
        const author = "Chuck Norris' side kick";
        const jokeObj = {
          id: resp.value.id,
          title: resp.value.joke,
          author: author,
          //   image: quotesApiArray[0].imgLink,
        };
        dispatch(loadChuckNorrisJokesSuccess(jokeObj));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
