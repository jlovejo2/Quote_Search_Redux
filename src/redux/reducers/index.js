import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import ronSwanson from "./ronSwansonApiReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors,
  quotes: { ronSwanson: ronSwanson },
  apiCallsInProgress,
});

export default rootReducer;
