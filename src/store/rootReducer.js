import { combineReducers } from "redux";
import subjects from "../components/subjects/reducers";
import courses from "../components/courses/reducers";
import course from "../components/course/reducers";

// core
import term from "../core/term/reducers";
import error from "../core/error/reducers";
import config from "../core/config/reducers";

const rootReducer = combineReducers({
  subjects,
  courses,
  course,
  term,
  error,
  config
});

export default rootReducer;
