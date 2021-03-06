export const courseActionTypes = {
  GET_COURSE_BY_CATALOG_NUMBER: 'course/GET_COURSE_BY_CATALOG_NUMBER',
  GET_COURSE_SUCCESS: 'course/GET_COURSE_SUCCESS',
  GET_COURSE_FAILURE: 'course/GET_COURSE_FAILURE',

  GET_COURSE_SCHEDULE: 'course/GET_COURSE_SCHEDULE',
  GET_COURSE_SCHEDULE_SUCCESS: 'course/GET_COURSE_SCHEDULE_SUCCESS',
  GET_COURSE_SCHEDULE_FAILURE: 'course/GET_COURSE_SCHEDULE_FAILURE',

  SHORTLIST_COURSE: 'course/SHORTLIST_COURSE',
  SHORTLIST_COURSE_SUCCESS: 'course/SHORTLIST_COURSE_SUCCESS',
  SHORTLIST_COURSE_FAILURE: 'course/SHORTLIST_COURSE_FAILURE',

  UNSHORTLIST_COURSE: 'course/UNSHORTLIST_COURSE',
  UNSHORTLIST_COURSE_SUCCESS: 'course/UNSHORTLIST_COURSE_SUCCESS',
  UNSHORTLIST_COURSE_FAILURE: 'course/UNSHORTLIST_COURSE_FAILURE',

  MARK_COURSE_TAKEN: 'courses/MARK_COURSE_TAKEN',
  MARK_COURSE_TAKEN_SUCCESS: 'courses/MARK_COURSE_TAKEN_SUCCESS',
  MARK_COURSE_TAKEN_FAILURE: 'courses/MARK_COURSE_TAKEN_FAILURE',

  UN_MARK_COURSE_TAKEN: 'courses/UN_MARK_COURSE_TAKEN',
  UN_MARK_COURSE_TAKEN_SUCCESS: 'courses/UN_MARK_COURSE_TAKEN_SUCCESS',
  UN_MARK_COURSE_TAKEN_FAILURE: 'courses/UN_MARK_COURSE_TAKEN_FAILURE'
};

export const getCourseByCatalogNumber = payload => ({
  type: courseActionTypes.GET_COURSE_BY_CATALOG_NUMBER,
  payload
});

export const getCourseSuccess = course => ({
  type: courseActionTypes.GET_COURSE_SUCCESS,
  course
});

export const getCourseFailure = error => ({
  type: courseActionTypes.GET_COURSE_FAILURE,
  error
});

export const getCourseSchedule = (term, subject, catalogNumber) => ({
  type: courseActionTypes.GET_COURSE_SCHEDULE,
  term,
  subject,
  catalogNumber
});

export const getCourseScheduleSuccess = sections => ({
  type: courseActionTypes.GET_COURSE_SCHEDULE_SUCCESS,
  sections
});

export const getCourseScheduleFailure = error => ({
  type: courseActionTypes.GET_COURSE_SCHEDULE_FAILURE,
  error
});

export const shortlistCourse = course => ({
  type: courseActionTypes.SHORTLIST_COURSE,
  course
});

export const shortlistCourseSuccess = course => ({
  type: courseActionTypes.SHORTLIST_COURSE_SUCCESS,
  course
});

export const shortlistCourseFailure = error => ({
  type: courseActionTypes.SHORTLIST_COURSE_FAILURE,
  error
});

export const unshortlistCourse = course => ({
  type: courseActionTypes.UNSHORTLIST_COURSE,
  course
});

export const unshortlistCourseSuccess = course => ({
  type: courseActionTypes.UNSHORTLIST_COURSE_SUCCESS,
  course
});

export const unshortlistCourseFailure = error => ({
  type: courseActionTypes.UNSHORTLIST_COURSE_FAILURE,
  error
});

export const markCourseTaken = payload => ({
  type: courseActionTypes.MARK_COURSE_TAKEN,
  payload
});

export const markCourseTakenSuccess = payload => ({
  type: courseActionTypes.MARK_COURSE_TAKEN_SUCCESS,
  ...payload
});

export const markCourseTakenFailure = payload => ({
  type: courseActionTypes.MARK_COURSE_TAKEN_FAILURE,
  payload
});

export const unMarkCourseTaken = payload => ({
  type: courseActionTypes.UN_MARK_COURSE_TAKEN,
  payload
});

export const unMarkCourseTakenSuccess = payload => ({
  type: courseActionTypes.UN_MARK_COURSE_TAKEN_SUCCESS,
  ...payload
});

export const unMarkCourseTakenFailure = payload => ({
  type: courseActionTypes.UN_MARK_COURSE_TAKEN_FAILURE,
  payload
});
