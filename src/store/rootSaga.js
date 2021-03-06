import { all, fork } from "redux-saga/effects";
import subjects from "../components/subjects/sagas";
import courses from "./courses/sagas";
import course from "../components/course/sagas";
import search from "./search/sagas";

// core
import term from "../core/term/sagas";
import user from "../core/user/sagas";

export default function*() {
  yield all([
    fork(subjects),
    fork(courses),
    fork(course),
    fork(term),
    fork(user),
    fork(search)
  ]);
}
