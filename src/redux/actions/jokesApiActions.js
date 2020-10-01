import * as types from "./actionTypes";
import * as dadJokeApi from "../../api/IcanhazdadjokeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDadJokeSuccess(jokes) {
  console.log("In load Dad joke action success");
  return {
    type: types.LOAD_DAD_JOKES_SUCCESS,
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
        console.log("in load Dad joke action resp received");
        const author = "Dad";
        const jokeObj = {
          id: "",
          title: resp[0],
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
