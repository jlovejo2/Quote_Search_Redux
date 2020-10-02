import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jokesApiReducer(state = initialState.jokes, action) {
  console.log("Entered jokes reducer...");
  switch (action.type) {
    case types.LOAD_DAD_JOKES_SUCCESS:
      state = [...state, action.jokes];
      return state;

    case types.LOAD_CHUCK_NORRIS_JOKES_SUCCESS:
      state = [...state, action.jokes];
      return state;

    case types.DELETE_JOKE_CLIENT_SIDE_OPTIMISTIC:
      return state.filter((joke) => {
        console.log(joke.id);
        joke.id !== action.joke.id;
      });

    default:
      return state;
  }
}
