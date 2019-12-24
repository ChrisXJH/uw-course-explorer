import { createSelector } from "reselect";

const selectDomain = state => state.courses;

export const coursesSelector = createSelector(
  selectDomain,
  subState => subState.courses
);

export const coursesIsLoadingSelector = createSelector(
  selectDomain,
  subState => subState.loading
);