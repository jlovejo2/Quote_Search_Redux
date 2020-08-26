import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import ronSwanson from "./ronSwansonApiReducer";
import quoteGarden from "./quoteGardenApiReducer";
import kanyeWest from "./kanyeWestApiReducer";
import taylorSwift from "./taylorSwiftApiReducer";
import donaldTrump from "./donaldTrumpApiReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors,
  ronSwanson,
  quoteGarden,
  kanyeWest,
  taylorSwift,
  donaldTrump,
  apiCallsInProgress,
});

export default rootReducer;
