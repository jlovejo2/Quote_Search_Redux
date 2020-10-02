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
      state = state.filter((joke, index) => {
        console.log(action.jokeId, index);
        if (index !== parseInt(action.jokeId)) {
          console.log("true", joke);
          return true;
        } else {
          console.log("false", joke);
          return false;
        }
      });

      return state;

    default:
      return state;
  }
}
