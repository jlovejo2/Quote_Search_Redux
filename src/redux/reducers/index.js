import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import ronSwanson from "./ronSwansonApiReducer";
import quoteGarden from "./quoteGardenApiReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors,
  ronSwanson,
  quoteGarden,
  apiCallsInProgress,
});

export default rootReducer;
